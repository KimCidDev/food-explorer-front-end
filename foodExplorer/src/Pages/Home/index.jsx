import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { Logo } from '../../components/Logo';

import { AiOutlineMenu } from 'react-icons/ai';
import { PiCopyright } from 'react-icons/pi';
import { GiMailbox } from 'react-icons/gi';

import macaroon from '../../assets/macaroon-promo-pic.png';
import greenSalad1 from '../../assets/greenSalad1.png';
import greenSalad2 from '../../assets/greenSalad2.png';
import meal1 from '../../assets/meal1.png';
import meal2 from '../../assets/meal2.png';


export function Home () {

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />

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
      />
      <Card 
      recipe="Zuchinni Salad"
      prato={greenSalad2}
      />
     </Section>

     <Section title="Pratos Principais" className="sectionMenu" >
      <Card 
      recipe="Pork Steak"
      prato={meal1}
      />
      <Card 
      recipe="Shirmp Pasta"
      prato={meal2}
      />
     </Section>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 