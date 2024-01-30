import { Container } from './styles';
import { Link } from 'react-router-dom'

export function Section ({children, icon: Icon, title, ...rest}) {
  return (
    <Container {...rest} className='section'>
      
      { Icon && <Icon size={18} />}{title}
      <div className='childrenBox'>
      <Link className='goBackLink' to='/foodInfo'>
      {children}
      </Link>
      </div>
    </Container>
  )
}