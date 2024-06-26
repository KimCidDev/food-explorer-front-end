import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
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

import { ImExit } from 'react-icons/im';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFileDownload } from "react-icons/md";

export function EditDishAdmin () {
  const { updateDish, signOut } = useAuth();
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

  function handleNavigateHome () {
    navigate('/');
  }

  async function handleUpdateDish() {
    const updatedDish = {
      id,
      name,
      description,
      category,
      price
    };
    await updateDish({dish: updatedDish, dishImgFile});
  }

  async function handleAvatarImgUpdate (event) {
    const file = event.target.files[0];
    setdishImgFile(file);
  }

  function handleSignOut () {
    navigate('/');
    return signOut();
  }

  async function handleDeleteDish () {
    const confirm = window.confirm("Deseja realmente excluir esse prato?");
    if (confirm) {
      navigate('/');
      await api.delete(`/dishes/${id}`);
    }
  }

  useEffect(() => {    
    const token = localStorage.getItem('@foodExplorer:token');
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    async function fetchClickedDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dishInfo = response.data.dish;
        const dishtags = response.data.tags;
        setDish(dishInfo);
        setTags(dishtags);
      } catch (error) {
        console.error('Error fetching dish information:', error);
      }
    }

    fetchClickedDish();
  }, [id]);

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />
        <div className="searchAndCart">
          <input 
            id="searchInput"
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
          />
          <Button icon={TiShoppingCart} title="Verificar Carrinho" />
        </div>
        <ImExit onClick={handleSignOut}/>
      </Header>

      <Section
        icon={AiOutlineLeft}
        title="voltar"
        onClick={handleNavigateHome}
      >
        <h1>Editar Prato</h1>
        <form id="editDishForm">
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
              onChange={e => setName(e.target.value)}
            />
            <Select
              title="Categoria"
              value={category || dish.category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>

          <div className="formMiddle">
            <div className="ingredientBox">
              <h3>Tags</h3>
              <div className='tagBox'>
                {tags.map(tag => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </div>
            </div>
            <Input 
              title="Preço"
              placeholder={dish.price} 
              onChange={e => setPrice(e.target.value)}
            />          
          </div>

          <div className="formBottom">        
            <div className="description">        
              <h3>Descrição</h3>
              <textarea
                placeholder={dish.description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="saveInfoBox">
              <Button title="Salvar Alterações" onClick={handleUpdateDish} />
              <Button title="Excluir Prato" onClick={handleDeleteDish} />
            </div>
          </div>
        </form>        
      </Section>     
      <Footer icon={PiCopyright}/>
    </Container>
  );
} 
