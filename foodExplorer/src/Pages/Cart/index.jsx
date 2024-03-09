import { Container } from './styles';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { PiCopyright } from 'react-icons/pi';
import { BsSearch, BsXLg } from 'react-icons/bs';


export function Cart () {
  const { signOut } = useAuth();

  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);

  const navigate = useNavigate();

  function handleSignOut () {
    navigate('/');
    console.log('olá')
    return signOut();
  }

  useEffect(() => {
    async function fetchDishesBySearch() {
      try {
        const response = await api.get(`/dishes?name=${search}`)
        
        console.log(response.data)
        setDishSearchResult(response.data)

      } catch (error) {        
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      }
      }
      
    
    fetchDishesBySearch()
    
  }, [search])

  return (
    <Container>
      <Header icon={BsXLg} to='/'>    
        <h1>Cart</h1>
      </Header>
      <div className="itemSearchBox">
      <Input
        placeholder="Procure pelo prato ou ingrediente desejado"
        type="text"
        icon={BsSearch}
        onChange={((e) => setSearch(e.target.value))}
      />
      {
        search ? dishSearchResult.map(dish => <div className='overviewBox'> 
          <h3>{dish.name}</h3>
          <p>{dish.price}</p>
        </div>)
         : <p> ish </p>
      }
      <h2
      onClick={handleSignOut}
      >Sair</h2>
      </div>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 