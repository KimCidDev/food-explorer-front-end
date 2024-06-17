// src/pages/Success/index.jsx

import React from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function PayDone() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header />
      <div className="contentWrapper">
        <h1>Payment Successful</h1>
        <p>Your payment was processed successfully. Thank you for your purchase!</p>
        <Button title="Go Home" onClick={handleGoHome} />
      </div>
      <Footer />
    </Container>
  );
}
