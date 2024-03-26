import { Container } from './styles';
import { Button } from '../../components/Button';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Card ({ dish, isAdmin }) {
  const [ quantity, setQuantity ] = useState(1);
  const [ cartDishes, setCartDishes ] = useState([]);

  const navigate = useNavigate();


  function handleEditDish () {    
    navigate(`/admin/editdish/${dish.id}`);
  }

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
      <div className="mainInfo">
        <img 
        src={`https://food-explorer-back-end-w9f3.onrender.com/files/${dish.dishImg}`} 
        alt={dish.description}
        onClick={() => handleDetails()}
        />
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
      </div>
      {/* Aqui podia ter TAGS se card @media.SM*/}

        {
          isAdmin ? 
          
          <div className="addToBasket">
            <p id="price">{dish.price}</p>
            <Button 
            title="Edit Dish"
            onClick={() => handleEditDish()} />
          </div>

        :

          <div className="addToBasket">
            <p id="price">{dish.price}</p>

            <div className="howManyBox">
              <BiMinus onClick={() => handleSubtractFromCart()}/>
              <p>{quantity}</p>
              <BsPlusLg onClick={() => handleAddToCart()} />
            <Button 
            title="Add"
            onClick={() => handleSaveToCart(dish)} />
            </div>   

          </div>
      }

    </Container>
  )
}
