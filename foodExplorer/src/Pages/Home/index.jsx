import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
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

import meal1 from '../../assets/meal1.png';
import macaroon from '../../assets/macaroon-promo-pic.png';

export function Home() {
  const { signOut, user } = useAuth();

  const [name, setName] = useState(user.name);
  const [dishes, setDishes] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [dishSearchResult, setDishSearchResult] = useState([]);

  const [loading, setLoading] = useState(true);

  const menuPath = '/menu';
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchTags() {
      
      try {
        const response = await api.get('/tags');
        console.log(response.data);
        setTags(response.data);
      } catch (error) {
        console.error('Error fetching dish information:', error);

      }
    }

    async function fetchDishes() {

      try {
        const response = await api.get('/dishes');
        console.log(response)
        const allDishes = response.data;
        localStorage.setItem('@foodExplorer:dishes', JSON.stringify(allDishes));

        setDishes(allDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      }
    }

    fetchDishes();
    fetchTags()
  }, []);

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
      <Header icon={AiOutlineMenu} to={menuPath}>
        <Logo />
        <div className="searchAndCart">
          <h2>{`Olá, ${name}`}</h2>
          <input
            id="searchInput"
            type="text"
            placeholder="Algum prato em mente?"
            onChange={((e) => setSearch(e.target.value))}
          />
          <Button icon={TiShoppingCart} title="Verificar Carrinho" />
        </div>

        <ImExit onClick={signOut} />
      </Header>

      <main>
        <div className="banner">
          <img src={macaroon} alt="macaroon sweet in many colors" />
          <div className="textContent">
            <h2>
              Sabores Inigualáveis
            </h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>


        <Section title="Saladas">
          <Swiper dishes={dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Salad') : dishes.filter(dish => dish.category === 'Salad')} />
         </Section>

        <Section title="Pratos Principais">
          <Swiper dishes={dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Main') : dishes.filter(dish => dish.category === 'Main')} />
        </Section>

        <Section title="Desserts">
          <Swiper dishes={dishSearchResult.length > 0 ? dishSearchResult.filter(dish => dish.category === 'Desserts') : dishes.filter(dish => dish.category === 'Desserts')} />
        </Section>

      </main>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
