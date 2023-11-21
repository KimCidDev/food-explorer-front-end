import { Container } from './styles';

export function Select ({icon: Icon, title, ...rest}) { 
  return (
    <Container> 
    { title && <p>{title}</p>}
    <div className='inputBox'>
    { Icon && <Icon size={20} /> }
       <select {...rest}>
        <option>Entrada</option>
        <option>Prato Principal</option>
        <option>Sobremesa</option>
        <option>Bebidas</option>
       </select>
    </div>
    </Container>
  )
}