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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam praesentium nesciunt corporis dolorum quaerat.</p>
        </div>
      </div>
      
      <Card 
      recipe="Hobbit Salad"
      description="beets, lettuce iceberg, parmesan, grape tomato"/>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 