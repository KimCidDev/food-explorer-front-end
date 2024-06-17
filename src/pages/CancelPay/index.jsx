import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function CancelPay() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header />
      <div className="content">
        <h1>Payment Canceled</h1>
        <p>Your payment was canceled. If you have any questions or need assistance, please contact our support.</p>
        <Button title="Go to Home" onClick={handleNavigateHome} />
      </div>
      <Footer />
    </Container>
  );
}
