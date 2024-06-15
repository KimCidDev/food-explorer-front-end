import { Container } from './styles';

export function Input({ icon: Icon, title, inputType, ...rest }) {
  return (
    <Container>
      {title && <p>{title}</p>}
      <div className="inputBox">
        {Icon && <Icon size={20} />}
        <input type={inputType} {...rest} />
      </div>
    </Container>
  );
}
