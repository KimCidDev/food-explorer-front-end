import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { Logo } from '../../components/Logo';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { ImExit } from 'react-icons/im';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";

import greenSalad1 from '../../assets/greenSalad1.png';


export function FoodInfo () {
  const { signOut } = useAuth();  
  const params = useParams();
          

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />        
        <div className="searchAndCart">
          <input
          id="searchInput"
          type="text"
          placeholder='Procure por outros pratos'
          />
          <Button 
          icon={TiShoppingCart} 
          title="Verificar Carrinho" />
        </div>
        <ImExit onClick={signOut}/>
      </Header>

      <Section
      title="voltar" 
      icon={AiOutlineLeft}
      to="/"
       >
      <img src={greenSalad1} alt="Ravanello Salad view from the top" />
      <div className="textContent">
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim tostado.</p>
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
        <Button title='Adicionar ao carrinho'></Button>
      </div>      
     </div>
     </div>
     </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 