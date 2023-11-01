import { useState } from 'react';
import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div className="logo">
      <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
      </svg>
      <h1> food Explorer </h1>
      </div>
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
