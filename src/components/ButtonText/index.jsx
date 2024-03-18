import { Container } from './styles'

export function ButtonText ({title, ...rest}) {
  return (
    <Container {...rest}>
      <span>
        {title}
      </span>
    </Container>
  )
}