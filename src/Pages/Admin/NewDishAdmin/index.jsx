import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/auth';
import { useNavigate } from 'react-router-dom';

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

export function NewDishAdmin () {
  const { signOut } = useAuth();

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ category, setCategory ] = useState("");

  const [ dishImgFile, setdishImgFile ] = useState(null);

  const navigate = useNavigate();

  function handleNavigateHome () {
    navigate('/');
  }

  async function handleAddTags(e) {
    e.preventDefault();
    console.log(newTag);
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  async function handleCreateDish() {
    try {
      
      const dishData = {
      name,
      description,
      category,
      price,
      tags
    };

    let dishImgFileName = null;
    if (dishImgFile) {
      const fileFormData = new FormData();
      fileFormData.append('dishImg', dishImgFile);

      const response = await api.post('/dishes/upload', fileFormData);
      dishImgFileName = response.data.fileName;
    }

    const dish = {
      ...dishData,
      dishImg: dishImgFileName
    } 

    console.log(dish)
    
    await api.post("/dishes", dish);
    

    return alert("Prato criado com sucesso");


    } catch (error) {      
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível autenticar o seu login")
      }
    }

  }

  async function handleAvatarImgUpdate (event) {
    const file = event.target.files[0];
    console.log(file)
    setdishImgFile(file)
 }

 function handleSignOut () {
  navigate('/');
  return signOut();
}

// Ao invés disso podia ser algo como function pra limpar os campos

async function handleDeleteDish () {
  const confirm = window.confirm("Deseja realmente excluir esse prato?")

  if (confirm) {
    navigate('/');
    return await api.delete(`/dishes/${id}`);
  }
}

  

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <Logo />
        <div className="searchAndCart">
          <input 
          id="searchInput"
          type="text" 
          placeholder="Search for your favorite dish..."/>
          <Button 
          icon={TiShoppingCart} 
          title="View Basket"
          onClick={() => navigate('/cart')}
          />
        </div>
        <ImExit onClick={handleSignOut}/>
      </Header>

      <Section
      icon={AiOutlineLeft}
      title="voltar"       
      onClick={handleNavigateHome}>

        <h1>Add Details of the new dish</h1>

        <div className="formTop">
        <div className="dishImg">
          <Input 
          title="Dish Image"
          type="file"
          id="hiddenInput"
          onChange={handleAvatarImgUpdate}
          />
          <label htmlFor="hiddenInput">
            <MdOutlineFileDownload />
            <p>Change Image</p>
        </label>
        </div>
          <Input 
          title="Dish Name"
          placeholder="New dish name"
          onChange={e=> setName(e.target.value)}
          />
          <Select
          title="Category"
          value={category}
          onChange={e=> setCategory(e.target.value)}
          />
        </div>

        <div className="formMiddle">          
          <Input 
          title="Price"
          placeholder="Ex.: 19.90" 
          onChange={e=> setPrice(`CAD$ ${e.target.value}`)}
        />        
          <div className="ingredientBox">
            <h3>Tags</h3>
              <Input 
              placeholder="Add a tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              />
              <Button
              title="Add tag!"
              onClick={handleAddTags}
              />
            <div className='tagBox'>
            { tags && tags.map((tag, index) => (
                  <Tag
                  key={index}
                  title={tag}
                  />))
            }
        '   </div>
           </div>
        
        </div>

        <div className="formBottom">        
          <div className="description">        
            <h3>Description</h3>
            <textarea
            name="" id="" cols="30" rows="4" 
            placeholder="Enter key points of this masterpiece"
            onChange={e=> setDescription(e.target.value)}>
            </textarea>        
          </div>
          <div className="saveInfoBox">
            <Button title="Create Dish" onClick={handleCreateDish} form="newDishForm"/>
          </div>
        </div>        

      </Section>     
      <Footer icon={PiCopyright}/>
    </Container>
  )
} 