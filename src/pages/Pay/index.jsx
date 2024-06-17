import React, { useState, useEffect } from 'react';
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
import { TiShoppingCart } from 'react-icons/ti';
import axios from 'axios';
import EnjoyItAsset from '../../assets/EnjoyItAsset.jpg';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


export function Pay() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('@foodExplorer:cart')) || [];
    setCart(cartItems);
    calculateTotal(cartItems);
  }, []);

  const extractPrice = (priceString) => {
    return parseFloat(priceString.replace('CAD$ ', ''));
  };

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + extractPrice(item.price) * item.quantity, 0);
    setTotalPrice(total.toFixed(2));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSignOut = () => {
    navigate('/cart');
    return signOut();
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const items = cart.map(item => ({
      name: item.name,
      price: extractPrice(item.price) * 100, // Convert to cents
      quantity: item.quantity,
    }));

    try {
      console.log('Stripe Public Key:', process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      const { data: { id } } = await axios.post(`${process.env.REACT_APP_API_URL}/payments/create-checkout-session`, {
        items,
      });

      const { error } = await stripe.redirectToCheckout({ sessionId: id });
      if (error) {
        console.error('Error during redirect to checkout:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <Container>
      <header>
        <Header icon={TiShoppingCart} to="/cart">
          <p>Olá, {user.name}</p>
        </Header>
        <ImExit onClick={handleSignOut} />
      </header>

      <div className="contentWrapper">
        <div className="textWrapper">
          <div className="cartSummary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <p key={item.id}>{item.name} x {item.quantity}: CAD$ {(extractPrice(item.price) * item.quantity).toFixed(2)}</p>
            ))}
            <h2>Total: CAD$ {totalPrice}</h2>
          </div>

          <div className="datePickerWrapper">
            <h3>Choose a delivery date</h3>
            <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
          </div>
        </div>

        <div className="imageWrapper">
          <img src={EnjoyItAsset} alt="Enjoy your meal" />
          <div className="paymentWrapper">
            <h2>Pay with card</h2>
            <Button title="Pay" onClick={handleCheckout} />
          </div>
        </div>
      </div>

      <Footer icon={PiCopyright} />
    </Container>
  );
}
