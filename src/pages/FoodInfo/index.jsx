import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, SectionWrapper } from './styles'; // Updated import for SectionWrapper
import { Tag } from '../../components/Tag';
import { Logo } from '../../components/Logo'; 
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Breathing } from '../../components/Breathing';

import { ImExit } from 'react-icons/im';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai'; 
import { AiOutlineLeft } from 'react-icons/ai'; 
import { TiShoppingCart } from 'react-icons/ti'; 

export function FoodInfo () {
  const { user, signOut } = useAuth();  
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [dish, setDish] = useState(null);
  const [tags, setTags] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function handleNavigateHome () {
    navigate('/');
  }

  function handleEditDish () {    
    navigate(`/admin/editdish/${dish.id}`);
  }

  function handleSignOut () {
    navigate('/');
    return signOut();
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dishInfo = response.data.dish;
        const dishtags = response.data.tags;
        setDish(dishInfo);
        setTags(dishtags);

      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }

    fetchDish();
  }, [id]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
    const existingItem = cartItems.find(item => item.id === dish.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ ...dish, quantity });
    }

    localStorage.setItem('@foodExplorer:cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!dish) {
    return <Breathing size="large"/>;
  }

  return (
    <Container>
      <Header icon={TiShoppingCart} to="/cart">
        <Logo />        
        <div className="searchAndCart">
          <input
            id="searchInput"
            type="text"
            placeholder='Search for something else'
          />
          <Button 
            icon={TiShoppingCart} 
            title="View Basket" 
            onClick={() => navigate('/cart')}
          />
        </div>
        <ImExit onClick={handleSignOut}/>
      </Header>

      <SectionWrapper> {/* Use SectionWrapper to wrap the Section component */}
        <Section
          title="Back to Home" 
          icon={AiOutlineLeft}
          onClick={handleNavigateHome}>

          <img       
            src={`https://food-explorer-back-end-w9f3.onrender.com/files/${dish.dishImg}`}  
            alt={dish.description} />

          <div className="textContent">
            <p>{dish.description}</p>
          
            <div className="tagsSection">
              { tags && tags.map(tag => (
                <Tag key={tag.id} title={tag.name}></Tag>        
              ))}
            </div>

            <div className="addToBasket">     
              { user.isAdmin ?
                <div className="adminEditButton">
                  <Button
                   title='Edit Dish'
                   onClick={handleEditDish}
                   /> 
                </div>
              :       
                <div className="howManyBox">
                  <BiMinus onClick={handleDecreaseQuantity} />
                  <p>{quantity}</p>
                  <BsPlusLg onClick={handleIncreaseQuantity} />
                  <Button 
                    title='Add to Basket'
                    onClick={handleAddToCart}
                  />
                </div> 
              }         
            </div>
          </div>
        </Section>
      </SectionWrapper>

      <Footer icon={PiCopyright}/>
    </Container>
  );
}
