import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/auth';
import { useParams, useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Tag } from '../../../components/Tag';
import { Logo } from '../../../components/Logo';
import { Input } from '../../../components/Input';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import { Section } from '../../../components/Section';
import { Select } from '../../../components/Select';

import { GiMailbox } from 'react-icons/gi';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFileDownload } from "react-icons/md";

export function EditDishAdmin () {
  const { updateDish } = useAuth();
   
  const params = useParams();
  const { id } = params; 
  const [dish, setDish] = useState({});  
  const [tags, setTags] = useState([]);  
  
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("");

  const [ dishImgFile, setdishImgFile ] = useState(null);

  const navigate = useNavigate();

  async function handleUpdateDish() {
    const dish = {
      id,
      name,
      description,
      category,
      price
    }

    await updateDish({dish, dishImgFile});
  }

  async function handleAvatarImgUpdate (event) {
    const file = event.target.files[0];

    setdishImgFile(file)
 }


  useEffect(() => {    
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchClickedDish() {
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
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);  
      }
    }

    fetchClickedDish();
  }, []);
  

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
      onClick={() => navigate('/')}
       >

        <h1>Editar Prato</h1>
        <form action="" id="newDishForm">
          
        <div className="formTop">
        <div className="dishImg">
        <Input 
        title="Imagem do Prato"
        type="file"
        id="hiddenInput"
        onChange={handleAvatarImgUpdate}
        />
        <label htmlFor="hiddenInput">
          <MdOutlineFileDownload />
          <p>Alterar Imagem</p>
        </label>
        </div>
        <Input 
        title="Nome do Prato"
        placeholder={dish.name}
        onChange={e=> setName(e.target.value)}
        />
        <Select
        title="Categoria"
        value={dish.category}
        onChange={e=> setCategory(e.target.value)}
        />
        </div>

        <div className="formMiddle">
        <div className="ingredientBox">
        <h3>Tags</h3>
        <div className='tagBox'>

          { tags && tags.map(tag => (
                      <Tag
                      key={tag.id} 
                      title={tag.name}
                      />
          ))

          }
        </div>
        </div>
        <Input 
        title="Preço"
        placeholder={dish.price} 
        onChange={e=> setPrice(e.target.value)}
        />
        
        </div>

        <div className="formBottom">        
        <div className="description">        
        <h3>Description</h3>
        <textarea
        name="" id="" cols="30" rows="4" 
        placeholder={dish.description}
        onChange={e=> setPrice(e.target.value)}>
        </textarea>        
        </div>
        <div className="saveInfoBox">
        <Button title="Salvar Alterações" onClick={handleUpdateDish} form="newDishForm"/>
        <Button title="Excluir Prato" form="newDishForm"/>
        </div>
        </div>
        </form>

        

      </Section>

     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 