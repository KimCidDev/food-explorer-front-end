import { api } from '../../services/api'; 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, HiddenCode } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {
  const [name, setName]  = useState("");
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [isAdmin, setIsAdmin]  = useState(false);
  const [isHiddenCodeVisible, setIsHiddenCodeVisible]  = useState(false);
  
  const navigate = useNavigate();

  function handleTapAndHold () {
    if (isAdmin) {
    console.log('xis salada', isHiddenCodeVisible)
    setIsHiddenCodeVisible(true);
    }
  }

  function handleSignUp () {
    if (!name || !email || !password) {
      return alert("todos os campos precisam estar preenchidos, rapá")
    }

    if (adminCode === "123") {
      setIsAdmin(true);
    }

    // this could be Async/await - try/catch

    api.post('/users', {name, email, password, isAdmin})
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
      
      <div className='logo' onTouchStart={handleTapAndHold} onTouchEnd={() => setIsHiddenCodeVisible(false)}>
        <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
        </svg>
        <h1>FaveMeal</h1>
   


        <HiddenCode isAdmin={isAdmin} isHiddenCodeVisible={isHiddenCodeVisible}>
         <p>123</p>
        </HiddenCode>
      </div>

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
      <div className='adminCheckbox'>
        <Input
        title="Quero ser administrador, oras!" 
        inputType="checkbox"
        checked={isAdmin}
        onChange={() => {
          setIsAdmin(!isAdmin)
          return console.log(isAdmin)}}/>
      
      {isAdmin && (
        <div className="adminCodeBox">
        <Input
          placeholder="Será que merece? Insira o código"
          onChange={e => setAdminCode(e.target.value)}
        />
      </div>
      )}
      </div>

      <Button title="Criar Conta" onClick={handleSignUp} />
      <ButtonText to='/' title="Já tenho uma conta"/>
    </Form>
    </Container>
    
  )
}
