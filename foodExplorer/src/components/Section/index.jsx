import { Container } from './styles'

export function Section ({children, title, ...rest}) {
  return (
    <Container {...rest} className='section'>
      
      <h1>{title}</h1>
      <div className='childrenBox'>
      {children}
      </div>
    </Container>
  )
}