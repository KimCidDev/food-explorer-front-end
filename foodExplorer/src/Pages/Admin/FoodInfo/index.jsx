import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { Logo } from '../../components/Logo';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { GiMailbox } from 'react-icons/gi';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';

import greenSalad1 from '../../assets/greenSalad1.png';


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
       >
      <img src={greenSalad1} alt="Ravanello Salad view from the top" />
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
      <div className="tagsSection">
      <Tag title="alface"/>
      <Tag title="cebola"/>
      <Tag title="pão naan"/>
      <Tag title="pepino"/>
      <Tag title="tomate"/>
      <Tag title="rabanete"/>
      </div>
      <div className="addToBasket">
      <div className="howManyBox">
        <BiMinus/>
        <p>01</p>
        <BsPlusLg/>
      </div>      
     <Button title="Incluir" />
     </div>
     </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 