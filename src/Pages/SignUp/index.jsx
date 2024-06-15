import { api } from '../../services/api'; 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, HiddenCode, Logo } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Breathing } from '../../components/Breathing';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [wantsAdmin, setWantsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isHiddenCodeVisible, setIsHiddenCodeVisible] = useState(false);
  
  const navigate = useNavigate();

  function handleCheckboxChange() {
    setWantsAdmin(!wantsAdmin);
    if (!wantsAdmin) {
      setIsHiddenCodeVisible(true);
    } else {
      setIsHiddenCodeVisible(false);
    }
  }

  async function handleSignUp() {
    let isAdminValue = isAdmin;
    
    if (!name || !email || !password) {
      return alert("All fields need to be filled");
    }

    if (wantsAdmin && adminCode === "yummy!") {
      isAdminValue = true;
    }

    setLoading(true);
    try {
      await api.post('/users', { name, email, password, isAdmin: isAdminValue });
      alert("User registered successfully!");
      navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Could not register user");
      } 
    } finally {
      setLoading(false);
      setIsAdmin(false);
    }
  }

  return (
    <Container>
      <Logo className='logo'>
        <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#9C27B0"/>
        </svg>
        <h1>FaveMeal</h1>
        {wantsAdmin && (
          <HiddenCode isHiddenCodeVisible={isHiddenCodeVisible}>
            <p>yummy!</p>
          </HiddenCode>
        )}
      </Logo>

      {loading ? (
        <Breathing size="medium" />
      ) : (
        <Form className="form-container">
          <h1>Create your Account</h1>
          <Input
            title="Name"
            placeholder="John The Guy"
            onChange={e => setName(e.target.value)}
          />
          <Input
            title="Email"
            placeholder="Enter your email address"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            title="Password"
            inputType="password"
            placeholder="Six characters or more"
            onChange={e => setPassword(e.target.value)}
          />
          <div className="adminCheckbox">
            <label>
              <input
                type="checkbox"
                checked={wantsAdmin}
                onChange={handleCheckboxChange}
              />
              <span>I want to become an administrator</span>
            </label>
          </div>
          {wantsAdmin && (
            <Input
              className="codeInput"
              inputType="text"
              placeholder="Now try to find the code"
              onChange={e => setAdminCode(e.target.value)}
            />
          )}
          <Button title="Sign Up" onClick={handleSignUp} />
          <ButtonText to='/' title="Sign In"/>
        </Form>
      )}
    </Container>
  );
}
