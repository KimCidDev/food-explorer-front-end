import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { Logo } from '../../components/Logo';

import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { PiCopyright } from 'react-icons/pi';
import { GiMailbox } from 'react-icons/gi';

import macaroon from '../../assets/macaroon-promo-pic.png';
import greenSalad1 from '../../assets/greenSalad1.png';
import greenSalad2 from '../../assets/greenSalad2.png';
import meal1 from '../../assets/meal1.png';
import meal2 from '../../assets/meal2.png';


export function FoodInfo () {

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />
        <GiMailbox />
      </Header>

      <Section
      icon={AiOutlineLeft}
      title="voltar" 
      className="sectionMenu"
       >
      <Card 
      recipe="Hobbit Salad"
      description="beets, lettuce iceberg, parmesan, grape tomato"
      prato={greenSalad1}
      />
     </Section>
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 