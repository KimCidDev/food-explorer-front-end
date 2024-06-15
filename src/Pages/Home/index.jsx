// src/pages/Home/index.jsx

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper } from '../../components/Swiper';

import { Container, BreathingContainer } from './styles';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Greeting } from '../../components/Greeting';
import { Breathing } from '../../components/Breathing';

import { ImExit } from 'react-icons/im';
import { IoIosBasket } from 'react-icons/io';
import { PiCopyright } from 'react-icons/pi';
import { TiShoppingCart } from 'react-icons/ti';

import macaroon from '../../assets/bannerImg.png';

export function Home() {
  const { signOut, user } = useAuth();
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const saladDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Salad') : dishes.filter(dish => dish.category === 'Salad');
  const mainDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Main') : dishes.filter(dish => dish.category === 'Main');
  const dessertDishes = dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Dessert') : dishes.filter(dish => dish.category === 'Dessert');

  function handleSignOut () {
    navigate('/');
    return signOut();
  }

  function handleNavigateNewDish () {
    return navigate('/admin/newdish');
  }

  function handleNavigateCart () {
    return navigate('/cart');
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchDishes() {
      try {
        setLoading(true);
        const response = await api.get(`/dishes?name=${search}`);
        const allDishes = response.data;
        localStorage.setItem('@foodExplorer:dishes', JSON.stringify(allDishes));
        setDishes(allDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header icon={IoIosBasket} to="/cart">
        <Logo />
        <Greeting name={user ? user.name : "Guest"} />
        <div className="searchAndCart">
          <input
            id="searchInput"
            type="text"
            placeholder="Search for your favorite dish..."
            onChange={(e) => setSearch(e.target.value)}
          />
          {user && user.isAdmin ? (
            <Button icon={TiShoppingCart}
             title="New Dish"
             onClick={handleNavigateNewDish} />
            ) : (       
            <Button icon={TiShoppingCart}
             title="View Cart"
             onClick={handleNavigateCart}
              />     
          )}
        </div>
        <ImExit onClick={handleSignOut} />
      </Header>

      <main>
        {search === "" && (
          <div className="banner">
            <img src={macaroon} alt="blackberry ice cream bar" />
            <div className='textContent'>
              <h2>Why Wait for Special Days?</h2>
              <p>
                Treat yourself to mouthwatering delights anytime you want.
              </p>
            </div>
          </div>
        )}

        {loading && (
         <BreathingContainer loading={loading}>
           <Breathing size="medium"/>
          </BreathingContainer>
        )}

        {saladDishes.length > 0 && (
          <Section title="Salads">
            <Swiper dishes={saladDishes} isAdmin={user ? user.isAdmin : false}/>
          </Section>
        )}
        {mainDishes.length > 0 && (
          <Section title="Main">
            <Swiper dishes={mainDishes} isAdmin={user ? user.isAdmin : false}/>
          </Section>
        )}
        {dessertDishes.length > 0 && (
          <Section title="Desserts">
            <Swiper dishes={dessertDishes} isAdmin={user ? user.isAdmin : false}/>
          </Section>
        )}
      </main>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
