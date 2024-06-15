import { Container, Circle } from './styles';

export function Breathing ({size}) {
  return (
    <Container className='breathing'>
      <Circle size={size}/>
    </Container>
  )
}
