import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { Logo } from '../../components/Logo';

import { BsXLg } from 'react-icons/bs';
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
      <Header icon={BsXLg}>
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
      description="beets, lettuce iceberg, parmesan, grape tomato"
      prato={greenSalad1}
      />
      <Card 
      recipe="Zuchinni Salad"
      description="beets, lettuce iceberg, parmesan, grape tomato"
      prato={greenSalad2}
      />
     </Section>

     <Section title="Pratos Principais" className="sectionMenu" >
      <Card 
      recipe="Pork Steak"
      description="beets, lettuce iceberg, parmesan, grape tomato"
      prato={meal1}
      />
      <Card 
      recipe="Shirmp Pasta"
      description="beets, lettuce iceberg, parmesan, grape tomato"
      prato={meal2}
      />
     </Section>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 