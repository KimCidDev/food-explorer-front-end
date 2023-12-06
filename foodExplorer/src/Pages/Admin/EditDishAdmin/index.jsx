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
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFileDownload } from "react-icons/md";

export function EditDishAdmin () {

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />
        <div className="searchAndCart">
          <input 
          id="searchInput"
          type="text" 
          placeholder="Busque por pratos ou ingredientes"/>
          <Button icon={TiShoppingCart} title="Verificar Carrinho" />
        </div>
        <GiMailbox />
      </Header>

      <Section
      icon={AiOutlineLeft}
      title="voltar" 
       >

        <h1>Editar Prato</h1>
        <form action="" id="newDishForm">
          
        <div className="formTop">
        <div className="dishImg">
        <Input 
        title="Imagem do Prato"
        type="file"
        id="hiddenInput" 
        />
        <label htmlFor="hiddenInput">
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
        </div>

        <div className="formMiddle">
        <div className="ingredientBox">
        <h3>Ingredientes</h3>
        <div className='tagBox'>
          <Tag 
          title="Sushi"
          />
          <Tag 
          title="Seaweed"
          />
        </div>
        </div>
        <Input 
        title="Preço"
        placeholder="R$ 00,00" />
        </div>

        <div className="formBottom">        
        <div className="description">        
        <h3>Description</h3>
        <textarea name="" id="" cols="30" rows="4" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
        </textarea>        
        </div>
        <div className="saveInfoBox">
        <Button title="Salvar Alterações" form="newDishForm"/>
        <Button title="Excluir Prato" form="newDishForm"/>
        </div>
        </div>
        </form>

        

      </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 