import { useState } from 'react';

import { Container, Form } from './styles';
import { useAuth } from '../../hooks/auth';

import { Logo } from '../../components/Logo';
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
      
      <Logo />

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
