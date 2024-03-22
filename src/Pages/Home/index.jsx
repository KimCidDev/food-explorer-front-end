import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper } from '../../components/Swiper';

import { Container } from './styles';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';

import { ImExit } from 'react-icons/im';
import { BsStar } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { IoIosBasket } from "react-icons/io";

import macaroon from '../../assets/bannerImg.png';

export function Home() {
  const { signOut, user } = useAuth();

  const [name, setName] = useState(user.name);
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);

  const menuPath = '/cart';
  const navigate = useNavigate();

  const saladDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Salad') : dishes.filter(dish => dish.category === 'Salad');
  const mainDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Main') : dishes.filter(dish => dish.category === 'Main');
  const dessertDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Dessert') : dishes.filter(dish => dish.category === 'Dessert');

  function handleSignOut () {
    navigate('/');
    return signOut();
  }

  function handleNavigateNewDish () {
    return navigate('admin/newdish');
}

  function handleNavigateCart () {
    return navigate('/cart')
  }

  useEffect(() => {    
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchDishes() {

      try {
        setLoading(true);

        const response = await api.get(`/dishes?name=${search}`)
        console.log(response.data)
        const allDishes = response.data;
        localStorage.setItem('@foodExplorer:dishes', JSON.stringify(allDishes));

        setDishes(allDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();
  }, []);

  useEffect(() => {
    
    async function fetchDishesBySearch() {
      try {
        setLoading(true);
        const response = await api.get(`/dishes?name=${search}`)
        
        console.log(response.data)
        setDishSearchResult(response.data)
        setLoading(false);
      } catch (error) {        
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      } finally {
        setLoading(false);

      }
      }
      
    
    fetchDishesBySearch()
    
  }, [search])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header icon={IoIosBasket} to={menuPath}>
        <Logo />
        <div className="searchAndCart">
          <h2>{`Hello, ${name}`}</h2>
          <input
            id="searchInput"
            type="text"
            placeholder="Meal choice made yet?"
            onChange={((e) => setSearch(e.target.value))}
          />
          { user.isAdmin ?
            <Button icon={TiShoppingCart}
             title="New Dish"
             onClick={handleNavigateNewDish} />
            :       
            <Button icon={TiShoppingCart}
             title="View Cart"
             onClick={handleNavigateCart}
              />     
        }
        </div>
        <ImExit onClick={handleSignOut} />
      </Header>

      <main>

      {search === "" && (
        <div className="banner">
          <img src={macaroon} alt="blackberry ice cream bar" />
          <div className="textContent">
            <h2>Why Wait for Special Days?</h2>
            <p>Treat yourself to mouthwatering delights anytime you want.</p>
          </div>
        </div>
      )}



        {saladDishes.length > 0 && (
        <Section title="Salads">
          <Swiper dishes={saladDishes} isAdmin={user.isAdmin}/>
        </Section>
         )}
      {mainDishes.length > 0 && (
        <Section title="Main">
          <Swiper dishes={mainDishes} isAdmin={user.isAdmin}/>
        </Section>
         )}
      {dessertDishes.length > 0 && (
        <Section title="Desserts">
          <Swiper dishes={dessertDishes} />
        </Section>
         )}

      </main>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
