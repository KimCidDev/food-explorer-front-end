import { Container } from './styles';
import { Button } from '../../components/Button';
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";

export function Card ({ dish }) {
  const navigate = useNavigate();

  const handleDetails = () => {
    setTimeout(() => {
      navigate(`/foodinfo/${dish.id}`);
    }, 0);
  };

  return (
    <Container onClick={() => handleDetails()}>
      <img src={dish.dishImg} alt={dish.description}/>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p id="price">{dish.price}</p>
      <div className="addToBasket">
        <div className="howManyBox">
          <BiMinus/>
          <p>01</p>
          <BsPlusLg/>
        </div>      
        <Button title="Incluir" />
      </div>
    </Container>
  )
}
