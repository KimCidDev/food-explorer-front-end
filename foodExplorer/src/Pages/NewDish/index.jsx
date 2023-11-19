import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
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


export function NewDish () {

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

        <h1> Novo prato</h1>
        <form action="">

        </form>
      <Button title="Incluir" />
      </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 