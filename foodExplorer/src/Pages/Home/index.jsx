import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';

import { ImExit } from "react-icons/im";
import { BsStar } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";

import meal1 from '../../assets/meal1.png';
import meal2 from '../../assets/meal2.png';
import macaroon from '../../assets/macaroon-promo-pic.png';


export function Home () {
  const { signOut, getDishes, user } = useAuth();
  const [ name, setName ] = useState(user.name);
  const [ dishes, setDishes ] = useState([])

  const [sliderRefSalad] = useKeenSlider({
    slides: {
      perView: 3
    }
  });

  const [ sliderRefMain ] = useKeenSlider({
    slides: {
      perView: 3
    }
  });

  const menuPath = '/menu';
  const navigate = useNavigate();

  async function handleNavigateToDish(dish_id) {
    try {
      const response = await api.get(`/dishes/${dish_id}`);
      const dishById = response.data;
      console.log(dishById);

      navigate(`/foodInfo/${dish}`)
  
    } catch (error) {
      console.error('Error fetching dish information:', error);
    }
  };


  useEffect(() => { 
    async function fetchDishes() {
      try {  
        const response = await api.get('/dishes/');
        const allDish = response.data;
        console.log(allDish);
        setDishes(allDish)

  
    
      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    };

    

      
    fetchDishes();
  }, []);


  return (
    <Container>
      <Header icon={AiOutlineMenu} to={menuPath}>
        <Logo />
        <div className="searchAndCart">
          <h2>{`Olá, ${name}`}</h2>
          <input
          id="searchInput"
          type="text" 
          placeholder='Algum prato em mente?'
          />
          <Button
          icon={TiShoppingCart}
          title="Verificar Carrinho" />
        </div>
        
        <ImExit onClick={signOut}/>
      </Header>

      <main>

      <div className="banner">
        <img src={macaroon} alt="macaroon sweet in many colors" />
        <div className="textContent">
        <h2>Sabores Inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      <Section title="Saladas" >
      
     <div ref={sliderRefSalad} className='keen-slider'>
            {dishes
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
                  onClick={() => handleNavigateToDish(dish.id)}
                />
              ))}
      </div>
     </Section>

     <Section title="Pratos Principais" className="sectionMenu" >
     <div ref={sliderRefMain} className='keen-slider'>            {dishes
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
                  onClick={() => handleNavigateToDish(dish.id)}
                />
              ))}
      </div>
     </Section>
     </main>

      <Footer icon={PiCopyright}/>
    </Container>
  )
}  