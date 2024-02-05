import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
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
import greenSalad1 from '../../assets/greenSalad1.png';
import greenSalad2 from '../../assets/greenSalad2.png';
import macaroon from '../../assets/macaroon-promo-pic.png';


export function Home () {
  const { signOut, user } = useAuth();
  const [ name, setName ] = useState(user.name);

  const [ sliderRefSalad ] = useKeenSlider({
    slides: {
      perView: 2
    }
  });
  const [ sliderRefMain ] = useKeenSlider({
    slides: {
      perView: 2
    }
  });

  const navigate = useNavigate();
  const menuPath = '/menu';

  async function handleNavitateToDish (id) {

    
  };



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
      <Card 
      icon={BsStar}
      recipe="Hobbit Salad"
      prato={greenSalad1}
      description="Green leafs, cucumber, radish and cauliflower salad"
      price="R$ 38,45"
      className='keen-slider__slide'
      />
      <Card 
      icon={BsStar}
      recipe="Zuchinni Salad"
      prato={greenSalad2}
      description="Lettuce iceberd, cucumber, tomato, red onions"
      price="R$ 27,95"
      className='keen-slider__slide'
      />
      <Card 
      icon={BsStar}
      recipe="Hobbit Salad"
      prato={greenSalad1}
      description="Green leafs, cucumber, radish and cauliflower salad"
      price="R$ 38,45"
      className='keen-slider__slide'
      />
      <Card 
      icon={BsStar}
      recipe="Zuchinni Salad"
      prato={greenSalad2}
      description="Lettuce iceberd, cucumber, tomato, red onions"
      price="R$ 27,95"
      className='keen-slider__slide'
      />
      </div>
     </Section>

     <Section title="Pratos Principais" className="sectionMenu" >
     <div ref={sliderRefMain} className='keen-slider'>
      <Card 
      icon={BsStar}
      recipe="Pancetta Bruschetta"
      prato={meal1}
      description="Whole wheat toast, butter, arugula, smoked pancetta"
      price="R$ 29,95"
      className="keen-slider__slide"
      />
      <Card 
      icon={BsStar}
      recipe="Shirmp Pasta"
      prato={meal2}
      description="Pan-fried giant shrimp on spaghettini with pesto and fresh basil"
      price="R$ 45,50"
      className="keen-slider__slide"
      />
      <Card 
      icon={BsStar}
      recipe="Pancetta Bruschetta"
      prato={meal1}
      description="Whole wheat toast, butter, arugula, smoked pancetta"
      price="R$ 29,95"
      className="keen-slider__slide"
      />
      <Card 
      icon={BsStar}
      recipe="Shirmp Pasta"
      prato={meal2}
      description="Pan-fried giant shrimp on spaghettini with pesto and fresh basil"
      price="R$ 45,50"
      className="keen-slider__slide"
      />
      </div>
     </Section>
     </main>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 