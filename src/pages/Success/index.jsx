import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Success() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header />
      <div className="content">
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your order is being processed and will be delivered soon.</p>
        <Button title="Go to Home" onClick={handleNavigateHome} />
      </div>
      <Footer />
    </Container>
  );
}
