import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';
import { Card } from '../../components/Card';
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
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { signOut, user } = useAuth();
  const [name, setName] = useState(user.name);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [saladSliderRef] = useKeenSlider({ slides: { perView: 3 } });
  const [mainSliderRef] = useKeenSlider({ slides: { perView: 3 } });

  const menuPath = '/menu';
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get('/dishes');
        const allDishes = response.data;
        localStorage.setItem('@foodExplorer:dishes', JSON.stringify(allDishes));

        const token = localStorage.getItem('@foodExplorer:token');
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        setDishes(allDishes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }

    fetchDishes();
  }, []);

  function handleNavigateToDish(id) {
    console.log("olá");
    navigate(`/foodinfo/${id}`)
  }

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  return (
    <Container>
      <Header icon={AiOutlineMenu} to={menuPath}>
        <Logo />
        <div className="searchAndCart">
          <h2 onClick={() => handleNavigateToDish(1)}>{`Olá, ${name}`}</h2>
          <input
            id="searchInput"
            type="text"
            placeholder="Algum prato em mente?"
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
          <div ref={saladSliderRef} className="keen-slider">
            {dishes && dishes
              .filter(dish => dish.category === 'Salad')
              .map(dish => (
                <Card
                  key={dish.id}
                  icon={BsStar}
                  recipe={dish.name}
                  prato={meal1}
                  description={dish.description}
                  price={dish.price}
                  className="keen-slider__slide"
                  onClick={() => handleNavigateToDish(1)}
                />
              ))}
          </div>
        </Section>

        <Section title="Pratos Principais" className="sectionMenu">
          <div ref={mainSliderRef} className="keen-slider">
            {dishes
              .filter(dish => dish.category === 'Main')
              .map(dish => (
                <Card
                  key={dish.id}
                  icon={BsStar}
                  recipe={dish.name}
                  prato={meal1}
                  description={dish.description}
                  price={dish.price}
                  className="keen-slider__slide"
                  onClick={() => handleNavigateToDish(1)}
                />
              ))}
          </div>
        </Section>
      </main>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
