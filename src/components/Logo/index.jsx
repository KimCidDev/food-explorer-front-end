import { Container } from './styles';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export function Logo () {  
  const { user } = useAuth();
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigateHome = () => {
    navigate('/'); // Define the function to navigate to the home page
  }

  return (
    <Container className='logo' onClick={handleNavigateHome}> {/* Add the onClick handler */}
      <svg width="20" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#8a5eff"/>
      </svg>
      <div className="adminBox">
        <h1> FaveMeal </h1>
        {user.isAdmin ? <p>Admin</p> : null}    
      </div>
    </Container>
  )
}
