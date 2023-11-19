import { useState } from 'react';
import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
  const [count, setCount] = useState(0)

  return (
    <Container>
    <Logo />

    <Form>

    
      <Input title="Seu Nome" placeholder="Ex.: Josh Homme"/>
      <Input title="Email"placeholder="Ex.: something@thatmail.com"/>
      <Input title="Senha"placeholder="Six digits or more"/>

      <Button title="Criar Conta" />
      <ButtonText title="Já tenho uma conta"/>
    </Form>
    </Container>
    
  )
}
