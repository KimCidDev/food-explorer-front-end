import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header({ icon: Icon, children, to }) {
  return (
    <Container>
      <Link id="menuLink" to={to}>
        {Icon && <Icon size={20} />}
      </Link>
      {children}
    </Container>
  );
}
