import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAuth } from '../../hooks/auth';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import { ImExit } from 'react-icons/im';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios';

const stripePromise = loadStripe('your-stripe-public-key');

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

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { data: { id } } = await axios.post('http://localhost:3000/payments/create-checkout-session', {
      items: [
        { name: 'Example Item', price: 1000, quantity: 1 },
      ],
    });

    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    if (error) {
      console.error('Error during redirect to checkout:', error);
    }
  };

  return (
    <Container>
      <Header icon={AiOutlineMenu}>
        <h2>Olá, {user.name}</h2>
        <ImExit onClick={handleSignOut} />
      </Header>

      <Elements stripe={stripePromise}>
        <h2>Pague com o cartão</h2>
        <Button title="Pagar" onClick={handleCheckout} />
      </Elements>

{/*       <h3>Escolha uma data para a entrega</h3>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
*/}
      <Footer icon={PiCopyright} />
    </Container>
  );
}
