import { Container } from './styles'

import { Button } from '../../components/Button'

import { BsStar, BsStarFill, BsPlusLg,  } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

export function Card ({recipe, description, prato, ...rest}) {
  return (
    <Container {...rest}>
      <BsStar id="save"/>
      <img src={prato} alt="lettuce iceberg, beets, arugula, tomato" />
      <h2>{recipe}</h2>
      <div className="sendAmount">
      <div className="howManyBox">
        <BiMinus/>
        <p>01</p>
        <BsPlusLg/>
      </div>
      </div>
     <Button title="Incluir" />
    </Container>
  )
}