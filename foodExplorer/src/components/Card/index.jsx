import { Container } from './styles'

export function Card ({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}