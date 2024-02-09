import { Container } from './styles';

import { Button } from '../../components/Button';

import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

export function Card ({icon: Icon, prato, recipe, description, className, price, tag: Tag, onClick, ...rest}) {
  return (
    <Container {...rest}  className={className} onClick={onClick}>
      { Icon && <Icon id="save"/> }
      <img src={prato} alt="lettuce iceberg, beets, arugula, tomato" />
      <h2>{recipe}</h2>
      { description && 
      <p>{description}</p>}
      { price && 
      <p id="price">{price} </p>}
      { Tag && 
      <div> {<Tag />} </div>}
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