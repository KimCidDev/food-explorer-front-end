import { api } from '../../services/api'; 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, HiddenCode } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Breathing } from '../../components/Breathing';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]= useState(false)

  const [wantsAdmin, setWantsAdmin]  = useState(false);
  const [adminCode, setAdminCode]  = useState("");
  const [isAdmin, setIsAdmin]  = useState(false);
  const [isHiddenCodeVisible, setIsHiddenCodeVisible]  = useState(false);
  
  const navigate = useNavigate();

  function handleTapAndHold () {
    if (wantsAdmin) {
    console.log('xis salada', isHiddenCodeVisible)
    setIsHiddenCodeVisible(true);
    }
  }

  async function handleSignUp () {
    let isAdminValue = isAdmin;
    console.log(isAdminValue)
    
    if (!name || !email || !password) {
      return alert("todos os campos precisam estar preenchidos, rapá")
    }
    

    if (wantsAdmin && adminCode === "123") {
      isAdminValue = true;
    }

    setLoading(true);
    try {
      console.log(isAdmin)

      await api.post('/users', {name, email, password, isAdmin: isAdminValue});
      alert("ususário cadastrado com sucesso aeaeaae uhul!");
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log("Xis Salada");
        alert(error.response.data.message);
      } else {
        alert("Não foi possível fazer o cadastro")
      } 
    } finally {
      setIsAdmin(false);
    };
  }

  return (
    <Container>    
      <div className='logo' onTouchStart={handleTapAndHold} onTouchEnd={() => setIsHiddenCodeVisible(false)}>
        <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#8a5eff"/>
        </svg>
        <h1>FaveMeal</h1>

        <HiddenCode isHiddenCodeVisible={isHiddenCodeVisible}>
         <p>123</p>
        </HiddenCode>
      </div>

      { loading ?
        <Breathing size="medium"/>
        :
        <Form>
          <h1>Create your Account</h1> 
        
          <Input 
          title="Name" 
          placeholder="John The Guy"
          onChange={e => setName(e.target.value)}/>

          <Input 
          title="Email"
          placeholder="Enter your email address"
          onChange={e => setEmail(e.target.value)}
          />
          
          <Input 
          title="Password"
          inputType="password"
          placeholder="Six characters or more"
          onChange={e => setPassword(e.target.value)}/>

          <div className='adminCheckbox'>
            <Input
            title="I want to become an administrator" 
            inputType="checkbox"
            checked={wantsAdmin}
            onChange={() => {
              setWantsAdmin(!wantsAdmin)
              return console.log(wantsAdmin)
            }
            }
              />
          </div>

          
          {wantsAdmin && (
            <Input
              className="codeInput"
              type="text"
              placeholder="If you have an admin code, enter it here"
              onChange={e => setAdminCode(e.target.value)}
            />
          )}


            <Button title="Sign Up" onClick={handleSignUp} />
            <ButtonText to='/' title="Sign In"/>
        </Form>
      }
    </Container>
    
  )
}
