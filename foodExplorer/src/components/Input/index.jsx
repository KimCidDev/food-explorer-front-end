import { Container } from './styles'

export function Input ({icon: Icon, title, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
        <p>{title}</p>
        <input {...rest} />
    </Container>
  )
}