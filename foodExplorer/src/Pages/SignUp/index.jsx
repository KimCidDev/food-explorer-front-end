import { api } from '../../services/api'; 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  
  const navigate = useNavigate();

  function handleSignUp () {
    if (!name || !email || !password) {
      return alert("todos os campos precisam estar preenchidos, rapá")
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert("ususário cadastrado com sucesso aeaeaae uhul!");
      navigate('/');
    })
    .catch(error => {
      if (error.response) {
        console.log("Xis Salada");
        alert(error.response.data.message)
      } else {
        alert("Não foi possível fazer o cadastro")
      }
    });
  }

  return (
    <Container>
    <Logo />

    <Form>
      <h1>Crie sua Conta</h1> 
    
      <Input 
      title="Seu Nome" 
      placeholder="Ex.: Josh Homme"
      onChange={e => setName(e.target.value)}/>

      <Input 
      title="Email"
      placeholder="Ex.: something@thatmail.com"
      onChange={e => setEmail(e.target.value)}
      />
      
      <Input 
      title="Senha"
      inputType="password"
      placeholder="Six digits or more"
      onChange={e => setPassword(e.target.value)}/>

      <Button title="Criar Conta" onClick={handleSignUp} />
      <ButtonText to='/' title="Já tenho uma conta"/>
    </Form>
    </Container>
    
  )
}
