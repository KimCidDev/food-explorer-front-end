import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { BsSearch, BsXLg } from 'react-icons/bs';


export function Menu () {

  return (
    <Container>
      <Header icon={BsXLg}>    
        <h1> Menu</h1>
      </Header>

      <Form>
      <Input
        placeholder="Name"
        type="text"
        icon={BsSearch}
      />
      </Form>
    </Container>
  )
} 