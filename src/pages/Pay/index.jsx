import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAuth } from '../../hooks/auth';
import { Container, Section, DatePickerContainer, PaymentButton } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import DatePicker from '../../components/DatePicker';
import { ImExit } from 'react-icons/im';
import { PiCopyright } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios';

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
// const stripePromise = loadStripe('pk_test_51PSQvcLWJE5BtmPhRMwDiLJJqBMlL7bEiLA2mbZ5cwB3ZjyQXpCguRvfgZbDHbydAqfsX3k5LIRjkZYOZrO4qpXn00cqrq3SZY');

export function Pay() {
  const { user, signOut } = useAuth();
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
    setCart(cartItems);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSignOut = () => {
    navigate('/');
    return signOut();
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const items = cart.map(item => ({
      name: item.name,
      price: item.price * 100, // Convert to cents
      quantity: item.quantity,
    }));

    const { data: { id } } = await axios.post('http://localhost:5555/payments/create-checkout-session', {
      items,
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

      <Section>
        <h2>Choose a delivery date</h2>
        <DatePickerContainer>
          <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
        </DatePickerContainer>
      </Section>

      <Section>
        <h2>Pay with card</h2>
        <Elements stripe={stripePromise}>
          <PaymentButton onClick={handleCheckout}>Pay</PaymentButton>
        </Elements>
      </Section>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
