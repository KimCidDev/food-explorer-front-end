import { Container } from './styles';

export function Section ({children, icon: Icon, title, onClick, ...rest}) {
  return (
    <Container {...rest} className='section'>
      <div className='goBackLink'>
      { Icon && <Icon size={18} />} 
      <h2 onClick={onClick}>{title}
      </h2>
      </div>
      <div className='childrenBox'>
      {children}
      </div>
    </Container>
  )
}