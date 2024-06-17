import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Container, RemoveButton, ProceedButton } from './styles';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { BsSearch, BsXLg } from 'react-icons/bs';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import { PiCopyright } from 'react-icons/pi';
import { api } from '../../services/api';

export function Cart() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [temporaryCart, setTemporaryCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
    setCart(cartItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchDishesBySearch = async () => {
      if (search) {
        try {
          const response = await api.get(`/dishes?name=${search}`);
          const dishesWithQuantity = response.data.map(dish => ({
            ...dish,
            quantity: 1
          }));
          setDishSearchResult(dishesWithQuantity);
        } catch (error) {
          console.error('Error fetching dish information:', error);
        }
      } else {
        setDishSearchResult([]);
      }
    };

    fetchDishesBySearch();
  }, [search]);

  const handleSignOut = () => {
    navigate('/');
    return signOut();
  };

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

  const handleRemoveFromCart = (dishId) => {
    const filteredCart = cart.filter(item => item.id !== dishId);
    localStorage.setItem('@foodExplorer:cart', JSON.stringify(filteredCart));
    setCart(filteredCart);
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
      alert("Meal placed in the cart. Yummy!");
      setSearch("");
      setLoading(false);
    } catch (error) {
      console.error('Error saving to cart:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header icon={BsXLg} to='/'>
        <h1>Basket</h1>
      </Header>
      <div className="itemSearchBox">
        <Input
          placeholder="Search for the desired dish or ingredient"
          type="text"
          icon={BsSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search ? (
          dishSearchResult.map((dish) =>
            <div className='overviewBox' key={dish.id}>
              <h3>{dish.name}</h3>
              <p>CAD$ {dish.price}</p>
              <div className='howManyBox'>
                <BiMinus onClick={() => subtractFromTemporaryCart(dish.id)} />
                <p>{temporaryCart.find(item => item.id === dish.id)?.quantity || 1}</p>
                <BiPlus onClick={() => addToTemporaryCart(dish.id)} />
                <Button
                  className="removeButton"
                  icon={BiPlus}
                  onClick={() => handleSaveToCart(dish.id)}
                />
              </div>
            </div>
          )
        ) : (
          cart.map((dish) => (
            <div className='overviewBox' key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <p>{dish.quantity}</p>
              <RemoveButton
                icon={BsXLg}
                onClick={() => handleRemoveFromCart(dish.id)}
              />
            </div>
          ))
        )}
        <ProceedButton onClick={() => navigate('/pay')}>
          Proceed to Payment
        </ProceedButton>
        <h2 onClick={handleSignOut}>Logout</h2>
      </div>
      <Footer icon={PiCopyright} />
    </Container>
  );
}
