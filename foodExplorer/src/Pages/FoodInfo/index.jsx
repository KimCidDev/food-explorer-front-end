import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo'; 
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { Tag } from '../../components/Tag';

import { AiOutlineMenu } from 'react-icons/ai'; 
import { AiOutlineLeft } from 'react-icons/ai'; 
import { TiShoppingCart } from 'react-icons/ti'; 
import { ImExit } from 'react-icons/im';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';

export function FoodInfo () {
  const { user, signOut } = useAuth();  
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const [dish, setDish] = useState(null);
  const [tags, setTags] = useState([]);

  function handleEditDish () {    
    navigate(`/admin/editdish/${dish.id}`);
  }

  function handleSignOut () {
    navigate('/');
    return signOut();
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dishInfo = response.data.dish;
        const dishtags = response.data.tags
        console.log(dishInfo);
        setDish(dishInfo);
        console.log(dishtags);
        setTags(dishtags);

      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }

    fetchDish();
  }, [id]);

  if (!dish) {
    return <div>Loading...</div>;
  }

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
        <ImExit onClick={handleSignOut}/>
      </Header>

      <Section
      title="Voltar à página principal" 
      icon={AiOutlineLeft}
      onClick={() => navigate('/')}
       >
      <img src={`http://localhost:5555/files/${dish.dishImg}`} alt={dish.description} />
      <div className="textContent">
      <p>{dish.description}</p>
      
      <div className="tagsSection">
      { tags && tags.map(tag => (
        <Tag key={tag.id} title={tag.name}></Tag>        
      ))}
      </div>
      <div className="addToBasket">
     
        { user.isAdmin ?
        <div className="adminEditButton">
        <Button
         title='Editar Prato'
         onClick={handleEditDish}
         /> 
        </div> 
        :       
        <div className="howManyBox">
        <BiMinus/>
        <p>01</p>
        <BsPlusLg/>
        <Button 
        title='Adicionar ao carrinho'
        />
      </div> 
        }
         
     </div>
     </div>
     </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
}
