import { useState } from 'react';
import { Container, Form } from './styles';

import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn() {
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  
  const navigate = useNavigate();

  function handleSignIn () {
    if ( !email || !password) {
      return alert("todos os campos precisam estar preenchidos, rapá")
    }

    api.get('/users', {name, email, password})
    .then(() => {
      alert("ususário cadastrado com sucesso");
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
      <h1>Faça Login</h1> 

      <Input 
      title="Email" 
      type='text' 
      placeholder="Ex.: something@thatmail.com"
      onChange={setEmail(e => e.target.value)}
      />
      
      
      <Input 
      title="Senha" 
      type='password' 
      placeholder="Six digits or more"
      onChange={setPassword(e => e.target.value)}
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
