import { useState } from 'react';

import { Container, Form } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn() {
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");

  const { signIn } = useAuth();

  function handleSignIn () {
    signIn({email, password})
  }

  return (
    <Container>
      
    <div className='logo'>
      <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
      </svg>
      <h1>food Explorer</h1>
    </div>  

    <Form>
      <h1>Faça Login</h1> 

      <Input 
      title="Email" 
      type='text' 
      placeholder="Ex.: something@thatmail.com"
      onChange={e => setEmail(e.target.value)}
      />
      
      
      <Input 
      title="Senha" 
      type='password' 
      placeholder="Six digits or more"
      onChange={e => setPassword(e.target.value)}
      />

      <Button 
      title="Entrar"
      onClick={handleSignIn}/>
      
      <ButtonText to='/register'
      title="Criar uma conta"/>
    </Form>
    </Container>
    
  )
}
