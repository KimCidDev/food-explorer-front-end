import { Container } from './styles'

import { Button } from '../../components/Button'

import { BsStar, BsStarFill, BsPlusLg,  } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

export function Card ({recipe, description, tag: Tag, prato, ...rest}) {
  return (
    <Container {...rest} className='card'>
      <BsStar id="save"/>
      <img src={prato} alt="lettuce iceberg, beets, arugula, tomato" />
      <h2>{recipe}</h2>
      { description && <p>{description}</p>}
      { Tag && <div> {<Tag />} </div>}
      <div className="addToBasket">
      <div className="howManyBox">
        <BiMinus/>
        <p>01</p>
        <BsPlusLg/>
      </div>      
     <Button title="Incluir" />
     </div>
    </Container>
  )
}