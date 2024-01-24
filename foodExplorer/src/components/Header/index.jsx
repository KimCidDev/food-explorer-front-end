import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header ({icon: Icon, children, to}) {
  const to = getTo();

  return (
    <Container>
      <Link to={getTo()}>
      { Icon && <Icon size={20} /> }
      </Link>
      {children}
    </Container>
  )
}