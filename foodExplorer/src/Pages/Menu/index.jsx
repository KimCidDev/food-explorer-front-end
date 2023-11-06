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

      <Input
        placeholder="Name"
        type="text"
        icon={BsSearch}
      />

      <Footer icon={PiCopyright}/>
    </Container>
  )
} 