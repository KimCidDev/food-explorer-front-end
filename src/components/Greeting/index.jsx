import { Container } from './styles';

export function Greeting ({ name }) {
  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning"
  } else if (currentHour < 18 ) {
    greeting = "Good afternoon"
  } else {
    greeting = "Good evening"
  }

  return (
    <Container>
      <div>
        <p>{`${greeting}, ${name}`}</p>
      </div>
    </Container>
  )
}