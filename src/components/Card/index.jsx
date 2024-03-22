import { Container } from './styles';
import { Button } from '../../components/Button';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Card ({ dish, isAdmin }) {
  console.log(isAdmin)


  const [ quantity, setQuantity ] = useState(1);
  const [ cartDishes, setCartDishes ] = useState([]);

  const navigate = useNavigate();

  const handleDetails = () => {
      navigate(`/foodinfo/${dish.id}`);
  };

  function handleAddToCart() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
  
  function handleSubtractFromCart() {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  function handleSaveToCart(dish) {
    setCartDishes(prevCartDishes => {
      const updatedCartDishes = [...prevCartDishes, { ...dish, quantity }];
      // Update localStorage
      const cartData = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
      const updatedCartData = [...cartData, { ...dish, quantity }];
      localStorage.setItem('@foodExplorer:cart', JSON.stringify(updatedCartData));
      alert("Meal placed on the cart. Yummy!")
      return updatedCartDishes;
    });
  }

  return (
    <Container >
      <img 
      src={`https://food-explorer-back-end-w9f3.onrender.com/files/${dish.dishImg}`} 
      alt={dish.description}
      onClick={() => handleDetails()}/>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      {/* Aqui podia ter TAGS se card @media.SM*/}
      <p id="price">{dish.price}</p>

        {
        isAdmin ? 

        <div className="addToBasket">
        <Button 
        title="Edit Dish"
        onClick={() => console.log('xis salada')} />
        </div>

        :

        <div className="addToBasket">
        <div className="howManyBox">
          <BiMinus onClick={() => handleSubtractFromCart()}/>
          <p>{quantity}</p>
          <BsPlusLg onClick={() => handleAddToCart()} />
        </div>      
        <Button 
        title="Add"
        onClick={() => handleSaveToCart(dish)} />
</div>
      }

    </Container>
  )
}
