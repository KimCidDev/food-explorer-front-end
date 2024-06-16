import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import { ImExit } from 'react-icons/im';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';

const stripePromise = loadStripe('pk_live_51PSQvcLWJE5BtmPhG8CDrwKJ8ZBM5U2XzRhjF2PxwoECezEp8YkCrqOCjY4pfVgiUU5tDTken67p48O2xi69XxSR00fGpnmSP8');

export function Pay() {
  const { user, signOut } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSignOut = () => {
    navigate('/');
    return signOut();
  };

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <h2>Olá, {user.name}</h2>
        <ImExit onClick={handleSignOut} />
      </Header>

      <Elements stripe={stripePromise}>
        <h2>Pague com o cartão</h2>
        <PaymentForm />
      </Elements>

      <h3>Escolha uma data para a entrega</h3>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />

      <Footer icon={PiCopyright} />
    </Container>
  );
}

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://favemeal.netlify.app/',
      },
    });

    if (error) {
      console.error('Error during payment confirmation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button title="Pagar" type="submit" />
    </form>
  );
}
