import { useState } from 'react';
import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [password, setpassword]  = useState("");

  return (
    <Container>
    <Logo />

    <Form>
      <h1>Crie sua Conta</h1> 
    
      <Input title="Seu Nome" placeholder="Ex.: Josh Homme"/>
      <Input title="Email"placeholder="Ex.: something@thatmail.com"/>
      <Input title="Senha"placeholder="Six digits or more"/>

      <Button title="Criar Conta" />
      <ButtonText title="Já tenho uma conta"/>
    </Form>
    </Container>
    
  )
}
