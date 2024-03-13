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
import { BiMinus } from 'react-icons/bi';

import { PiCopyright } from 'react-icons/pi';
import { BsSearch, BsXLg } from 'react-icons/bs';


export function Cart () {
  const { signOut } = useAuth();

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);  

  const navigate = useNavigate();

  function handleAddToCart(index) {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += 1;
      return updatedCart
    });
  };
  
  function handleSubtractFromCart(index) {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } return updatedCart })
  };

  function handleSignOut () {
    navigate('/');
    console.log('olá')
    return signOut();
  };

  function handleSaveToCart(dishId) {
    try {
      const cartDishes = localStorage.getItem('@foodExplorer:cart') || '[]'; // Initialize as an empty array if no cart exists
      const cartUpdated = JSON.parse(cartDishes);
  
      // Fetch dish data
      const dishData = JSON.parse(localStorage.getItem('@foodExplorer:dishes')) || [];
      const selectedDish = dishData.find(dish => dish.id === dishId);
  
      if (!selectedDish) {
        console.error('Dish not found');
        return;
      }
  
      // Check if the dish already exists in the cart
      const existingCartItem = cartUpdated.find(item => item.id === dishId);
  
      if (existingCartItem) {
        // If the dish already exists in the cart, update its quantity
        existingCartItem.quantity += quantity;
      } else {
        // If the dish doesn't exist in the cart, add it with the specified quantity
        cartUpdated.push({ ...selectedDish, quantity });
      }
  
      // Update cart in localStorage
      localStorage.setItem('@foodExplorer:cart', JSON.stringify(cartUpdated));
  
      // Update state
      setCart(cartUpdated);
  
      // Provide feedback to the user
      alert("Meal placed on the cart. Yummy!");
      setSearch("");

      setLoading(false);
    } catch (error) {
      console.error('Error saving to cart:', error);
      // Handle error gracefully
    }
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
        const response = await api.get(`/dishes?name=${search}`);
        const dishesWithQuantity = response.data.map(dish => ({
          ...dish,
          quantity: 1  // Initialize quantity to 1 for each dish
        }));
        setDishSearchResult(dishesWithQuantity);
  
      } catch (error) {        
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      }
    }
  
    fetchDishesBySearch();
  
    // Ensure that loading state is updated immediately after search
    setLoading(false);
  }, [search]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header icon={BsXLg} to='/'>    
        <h1 onClick={() => console.log(cart)}>Cart</h1>
      </Header>
      <div className="itemSearchBox">
      <Input
        placeholder="Procure pelo prato ou ingrediente desejado"
        type="text"
        icon={BsSearch}
        onChange={((e) => setSearch(e.target.value))}
      />
      {
          search ? dishSearchResult.map((dish, index) => 
            <div className='overviewBox' key={dish.id}> 
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <div className='howManyBox'>
            <BiMinus onClick={() => handleSubtractFromCart(index)}/>
            <p>{1}</p>
            <BsPlusLg onClick={() => handleAddToCart(index)} />                      
            <Button
            icon={BsPlusLg}
            onClick={() => handleSaveToCart(dish.id)}/>
            </div>
        </div>)
         : cart.map((dish, index) => 
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