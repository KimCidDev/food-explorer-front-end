import { useState } from 'react';

import { Container, Form } from './styles';
import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Breathing } from '../../components/Breathing';


export function SignIn({navigate}) {
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [loading, setLoading]  = useState(false);

  const { signIn } = useAuth();

  function handleSignIn () {
    setLoading(true);
    signIn({email, password}, () => {
      console.log('xis salada');
      navigate('/');
    })
  }

  return (
    <Container>
      
    <div className='logo'>
      <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
      </svg>
      <h1>FaveMeal</h1>
    </div>  

    <Form>
      <h1>Faça Login</h1> 

      <Input 
      title="Email" 
      type='text' 
      placeholder="Enter your email address"
      onChange={e => setEmail(e.target.value)}
      />
      
      
      <Input 
      title="Password" 
      type='password' 
      placeholder="Six characters or more"
      onChange={e => setPassword(e.target.value)}
      />

      {loading ? <Breathing /> : null}

      <Button 
      title="Ready to eat"
      onClick={handleSignIn}/>
      
      <ButtonText to='/register'
      title="Sign Up"/>
    </Form>
    </Container>
    
  )
}
