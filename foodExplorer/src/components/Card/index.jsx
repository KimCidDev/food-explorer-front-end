import { Container } from './styles'

import { Button } from '../../components/Button'

import { BsSearch, BsXLg } from 'react-icons/bs';
import { PiCopyright } from 'react-icons/pi';

import Salada from '../../assets/greenSalad.png'

export function Card ({title, price, ...rest}) {
  return (
    <Container {...rest}>
      <BsSearch/>
      {Salada}
      {title}
      {price}
      <div className="howManyBox">
        <PiCopyright/>
        <p>1</p>
        <PiCopyright/>
      </div>
      {BsXLg}
      <Button title="Adicionar" />
    </Container>
  )
}