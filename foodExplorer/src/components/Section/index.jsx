import { Container } from './styles';
import { Link } from 'react-router-dom'

export function Section ({children, icon: Icon, title, ...rest}) {
  return (
    <Container {...rest} className='section'>
      
      <Link className='goBackLink' to='/admin/'>{ Icon && <Icon size={18} />}{title}</Link>
      <div className='childrenBox'>
      {children}
      </div>
    </Container>
  )
}