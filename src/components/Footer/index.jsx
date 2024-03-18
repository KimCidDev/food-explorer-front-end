import { Container } from './styles';
import { Logo } from '../../components/Logo';


export function Footer ({icon: Icon, children}) {

  return (
    <Container>
      <Logo />
      
      <span> 
        { Icon && <Icon size={12} /> }
        2023 - Todos os direitos reservados
        </span>
    </Container>
  )
}