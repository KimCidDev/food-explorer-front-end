import { Container } from './styles';
import { Card } from '../../components/Card';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';

import { GiMailbox } from 'react-icons/gi';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";

import meal1 from '../../assets/meal1.png';
import meal2 from '../../assets/meal2.png';
import greenSalad1 from '../../assets/greenSalad1.png';
import greenSalad2 from '../../assets/greenSalad2.png';
import macaroon from '../../assets/macaroon-promo-pic.png';


export function Home () {

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />
        <div className="searchAndCart">
          <input type="text" />
          <Button icon={TiShoppingCart} title="Verificar Carrinho" />
        </div>
        <GiMailbox />
      </Header>

      <div className="banner">
        <img src={macaroon} alt="macaroon sweet in many colors" />
        <div className="textContent">
        <h2>Sabores Inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      <Section title="Saladas" className="sectionMenu" >
      <Card 
      recipe="Hobbit Salad"
      prato={greenSalad1}
      description="Green leafs, cucumber, radish and cauliflower salad"
      price="R$ 38,45"
      />
      <Card 
      recipe="Zuchinni Salad"
      prato={greenSalad2}
      description="Lettuce iceberd, cucumber, tomato, red onions"
      price="R$ 27,95"
      />
     </Section>

     <Section title="Pratos Principais" className="sectionMenu" >
      <Card 
      recipe="Pancetta Bruschetta"
      prato={meal1}
      description="Whole wheat toast, butter, arugula, smoked pancetta"
      price="R$ 29,95"
      />
      <Card 
      recipe="Shirmp Pasta"
      prato={meal2}
      description="Pan-fried giant shrimp on spaghettini with pesto and fresh basil"
      price="R$ 45,50"
      />
     </Section>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 