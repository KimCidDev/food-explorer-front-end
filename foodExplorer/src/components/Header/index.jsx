import { Container } from './styles';

export function Header ({icon: Icon, children}) {

  return (
    <Container>
      { Icon && <Icon size={20} /> }
      {children}
    </Container>
  )
}