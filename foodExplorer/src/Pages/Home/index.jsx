import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import { BsXLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';

import macaroon from '../../assets/macaroon-promo-pic.png';


export function Home () {

  return (
    <Container>
      <Header icon={BsXLg}>    
        <h1>Menu</h1>
      </Header>
      <div className="banner">
        <img src={macaroon} alt="" />
        <div className="textContent">
        <h2>Sabores Inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      <div className="sectionMenu">      
      <Card 
      recipe="Hobbit Salad"
      description="beets, lettuce iceberg, parmesan, grape tomato"/>
      <Card 
      recipe="Hobbit Salad"
      description="beets, lettuce iceberg, parmesan, grape tomato"/>
      </div>


      <Footer icon={PiCopyright}/>
    </Container>
  )
} 