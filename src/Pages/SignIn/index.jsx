import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Logo } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Breathing } from '../../components/Breathing';

import { api } from '../../services/api';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignIn() {
    if (!email || !password) {
      return alert("All fields need to be filled");
    }

    setLoading(true);
    try {
      await api.post('/sessions', { email, password });
      alert("Logged in successfully!");
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Could not log in");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Logo className='logo'>
        <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#9C27B0"/>
        </svg>
        <h1>FaveMeal</h1>
      </Logo>

      {loading ? (
        <Breathing size="medium" />
      ) : (
        <Form className="form-container">
          <h1>Sign In</h1>
          <Input
            title="Email"
            placeholder="Enter your email address"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            title="Password"
            inputType="password"
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button title="Sign In" onClick={handleSignIn} />
          <ButtonText to='/register' title="Sign Up"/>
        </Form>
      )}
    </Container>
  );
}
