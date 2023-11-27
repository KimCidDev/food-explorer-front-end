import { Container } from './styles';
import { Tag } from '../../../components/Tag';
import { Logo } from '../../../components/Logo';
import { Input } from '../../../components/Input';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import { Section } from '../../../components/Section';
import { Select } from '../../../components/Select';

import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { GiMailbox } from 'react-icons/gi';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { MdOutlineFileDownload } from "react-icons/md";

import greenSalad1 from '../../../assets/greenSalad1.png';


export function NewDishAdmin () {

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

        <h1>Novo prato</h1>
        <form action="">
        <div className="dishImg">
        <Input 
        title="Imagem do Prato"
        type="file"
        id="dishImg" 
        />
        <label htmlFor="dishImg">
          <MdOutlineFileDownload />
          <p>Selecione imagem</p>
        </label>
        </div>
        <Input 
        title="Nome do Prato"
        placeholder="Ex.: Salada Caesar" 
        />
        <Select
        title="Categoria" 
        />
        <h3>Ingredientes</h3>
        <div className='tagBox'>
          <Tag 
          title="Sushi"
          />
          <Tag 
          title="Seaweed"
          />
        </div>
        <Input 
        title="Preço"
        placeholder="R$ 00,00" />
        <h3>Description</h3>
        <div className="description">
        <textarea name="" id="" cols="30" rows="4" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
        </textarea>
        </div>
        </form>
      <Button title="Incluir" />
      </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 