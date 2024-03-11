import { Container } from './styles';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { BsPlusLg } from 'react-icons/bs';

import { PiCopyright } from 'react-icons/pi';
import { BsSearch, BsXLg } from 'react-icons/bs';


export function Cart () {
  const { signOut } = useAuth();

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const dishesFromCart = cart.map(dish => dish)

  function handleSignOut () {
    navigate('/');
    console.log('olá')
    return signOut();
  };

  function handleSaveToCart(dishId) {
    setCart(prevState => {
      const dishData = JSON.parse(localStorage.getItem('@foodExplorer:dishes')) || [];
      const filteredDish = dishData.filter(dish => dish.id == dishId);
      console.log(filteredDish);
      const updatedCartDishes = [...prevState, ...filteredDish ];
      console.log(updatedCartDishes);
      const cartData = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
      console.log(cartData);
      const updatedCartData = [...cartData, ...filteredDish ];
      console.log(updatedCartData);
      localStorage.setItem('@foodExplorer:cart', JSON.stringify(updatedCartData));
      alert("Meal placed on the cart. Yummy!")
      return updatedCartDishes;
    });
  }

  function handleRemoveFromCart (dishId) {
    const filteredCart = cart.filter(item => item.id !== dishId);
    localStorage.setItem('@foodExplorer:cart', JSON.stringify(filteredCart));
    return setCart(filteredCart);
  };

  useEffect(() => {
    async function fetchCartDishes() {
      try {
        const cartDishes = localStorage.getItem('@foodExplorer:cart') || [];
        const cartUpdated = JSON.parse(cartDishes);

        setCart(cartUpdated)
        setLoading(false);
        

      } catch (error) {        
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      }
      }
      
      fetchCartDishes()
    
  }, [])

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header icon={BsXLg} to='/'>    
        <h1 onClick={() => console.log(dishesFromCart)}>Cart</h1>
      </Header>
      <div className="itemSearchBox">
      <Input
        placeholder="Procure pelo prato ou ingrediente desejado"
        type="text"
        icon={BsSearch}
        onChange={((e) => setSearch(e.target.value))}
      />
      {
        search ? dishSearchResult.map(dish => 
          <div className='overviewBox' key={dish.id}> 
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>            
          <Button
          icon={BsPlusLg}
          onClick={() => handleSaveToCart(dish.id)}/>
        </div>)
         : dishesFromCart.map(dish => 
          <div className='overviewBox' key={dish.id}> 
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
            <p>{dish.quantity}</p>
          <Button
          icon={BsXLg}
          onClick={() => handleRemoveFromCart(dish.id)}/>
        </div>)
      }
      <h2
      onClick={handleSignOut}
      >Sair</h2>
      </div>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 