import { useState } from 'react';
import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      
      <Logo />

    <Form>
    
      <Input 
      title="Email" 
      type='text' 
      placeholder="Ex.: something@thatmail.com"
      />
      
      
      <Input 
      title="Senha" 
      type='password' 
      placeholder="Six digits or more"
      />

      <Button title="Entrar" />
      <ButtonText title="Criar uma conta"/>
    </Form>
    </Container>
    
  )
}
