import { Container } from './styles';

export function Section ({children, icon: Icon, title, ...rest}) {
  return (
    <Container {...rest} className='section'>
      <div className='goBackLink'>
      { Icon && <Icon size={18} />} {title}
      </div>
      <div className='childrenBox'>
      {children}
      </div>
    </Container>
  )
}