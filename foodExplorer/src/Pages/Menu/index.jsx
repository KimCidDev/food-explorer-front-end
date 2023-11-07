import { Container } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';

import { BsSearch, BsXLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';



export function Menu () {

  return (
    <Container>
      <Header icon={BsXLg}>    
        <h1>Menu</h1>
      </Header>
      <div className="itemSearchBox">
      <Input
        placeholder="Procure pelo prato ou ingrediente desejado"
        type="text"
        icon={BsSearch}
      />
      <h2>Sair</h2>
      </div>

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 