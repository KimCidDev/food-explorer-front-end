import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container } from './styles';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg, BsSearch, BsXLg } from 'react-icons/bs';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { PiCopyright } from 'react-icons/pi';

export function Cart() {
  const { signOut } = useAuth();
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [temporaryCart, setTemporaryCart] = useState([]);
  const navigate = useNavigate();

  const addToTemporaryCart = (dishId) => {
    const dishOnTheList = temporaryCart.find(dish => dish.id === dishId);
    if (dishOnTheList) {
      dishOnTheList.quantity += 1;
      setTemporaryCart([...temporaryCart]);
    } else {
      const dishResult = dishSearchResult.find(dish => dish.id === dishId);
      if (dishResult) {
        setTemporaryCart([...temporaryCart, { ...dishResult, quantity: 1 }]);
      }
    }
  };

  const subtractFromTemporaryCart = (dishId) => {
    const dishOnTheList = temporaryCart.find(dish => dish.id === dishId);
    if (dishOnTheList && dishOnTheList.quantity > 1) {
      dishOnTheList.quantity -= 1;
      setTemporaryCart([...temporaryCart]);
    }
  };

  const handleSignOut = () => {
    navigate('/');
    return signOut();
  };

  const handleSaveToCart = (dishId) => {
    try {
      const cartDishes = localStorage.getItem('@foodExplorer:cart') || '[]';
      const cartUpdated = JSON.parse(cartDishes);

      const dishInfo = dishSearchResult.find(dish => dish.id === dishId);
      if (!dishInfo) {
        console.error('Dish information not found');
        return;
      }

      const existingCartItem = cartUpdated.find(item => item.id === dishId);
      const quantityInTemporaryCart = temporaryCart.find(item => item.id === dishId)?.quantity || 1;

      if (existingCartItem) {
        existingCartItem.quantity = quantityInTemporaryCart;
      } else {
        cartUpdated.push({ ...dishInfo, quantity: quantityInTemporaryCart });
      }

      localStorage.setItem('@foodExplorer:cart', JSON.stringify(cartUpdated));
      setCart(cartUpdated);
      setTemporaryCart([]);
      alert('Meal placed on the cart. Yummy!');
      setSearch('');
      setLoading(false);
    } catch (error) {
      console.error('Error saving to cart:', error);
    }
  };

  const handleRemoveFromCart = (dishId) => {
    const filteredCart = cart.filter(item => item.id !== dishId);
    localStorage.setItem('@foodExplorer:cart', JSON.stringify(filteredCart));
    setCart(filteredCart);
  };

  const handlePaymentRedirect = () => {
    navigate('/pay');
  };

  useEffect(() => {
    async function fetchCartDishes() {
      try {
        const cartDishes = localStorage.getItem('@foodExplorer:cart') || '[]';
        const cartUpdated = JSON.parse(cartDishes);
        setCart(cartUpdated);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }
    fetchCartDishes();
  }, []);

  useEffect(() => {
    async function fetchDishesBySearch() {
      try {
        const response = await api.get(`/dishes?name=${search}`);
        const dishesWithQuantity = response.data.map(dish => ({
          ...dish,
          quantity: 1
        }));
        setDishSearchResult(dishesWithQuantity);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }
    fetchDishesBySearch();
  }, [search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header icon={BsXLg} to='/'>
        <h1 onClick={() => console.log(cart)}>Basket</h1>
      </Header>
      <div className="itemSearchBox">
        <Input
          placeholder="Procure pelo prato ou ingrediente desejado"
          type="text"
          icon={BsSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search ? (
          dishSearchResult.map((dish) => (
            <div className='overviewBox' key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <div className='howManyBox'>
                <BiMinus onClick={() => subtractFromTemporaryCart(dish.id)} />
                <p>{temporaryCart.find(item => item.id === dish.id)?.quantity || 1}</p>
                <BsPlusLg onClick={() => addToTemporaryCart(dish.id)} />
                <Button
                  icon={BsPlusLg}
                  onClick={() => handleSaveToCart(dish.id)}
                />
              </div>
            </div>
          ))
        ) : (
          cart.map((dish) => (
            <div className='overviewBox' key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <p>{dish.quantity}</p>
              <Button
                icon={BsXLg}
                onClick={() => handleRemoveFromCart(dish.id)}
              />
            </div>
          ))
        )}
        <Button
          title="Proceed to Payment"
          onClick={handlePaymentRedirect}
        />
        <h2 onClick={handleSignOut}>Sair</h2>
      </div>
      <Footer icon={PiCopyright} />
    </Container>
  );
}