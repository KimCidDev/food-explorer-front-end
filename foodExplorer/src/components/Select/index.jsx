import { Container } from './styles';

export function Select ({icon: Icon, title, value, ...rest}) { 
  return (
    <Container> 
    { title && <p>{title}</p>}
    <div className='inputBox'>
    { Icon && <Icon size={20} /> }
       <select value={value} {...rest}>
        <option>Salad</option>
        <option>Main</option>
        <option>Desserts</option>
       </select>
    </div>
    </Container>
  )
}