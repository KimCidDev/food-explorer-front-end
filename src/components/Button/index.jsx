import { Container } from './styles';

export function Button({ title, icon: Icon, className, ...rest }) {
  return (
    <Container className={className} {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
