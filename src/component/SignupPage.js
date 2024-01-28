// SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0); 
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    if (!username || !email || numberOfTickets <= 0) {
      alert('Please fill in all fields and select at least 1 ticket');
      return;
    }

    const ticketPrice = 2500;
    const calculatedTotalPrice = numberOfTickets * ticketPrice;

    
    const discountThreshold = 5;
    const discountPercentage = 5; 
    const numberOfDiscounts = Math.floor(numberOfTickets / discountThreshold);
    const appliedDiscount = numberOfDiscounts * discountPercentage;


    const finalPrice = calculatedTotalPrice - (calculatedTotalPrice * appliedDiscount) / 100;

    setTotalPrice(calculatedTotalPrice);
    setDiscount(appliedDiscount);

    setIsBookingSuccess(true);

    console.log(`Total Price: $${calculatedTotalPrice}`);
    console.log(`Discount Applied: ${appliedDiscount}%`);
    console.log(`Price After Discount: $${finalPrice}`);
  };

  const handleReset = () => {
    setUsername('');
    setEmail('');
    setNumberOfTickets(1);
    setIsBookingSuccess(false);
    setTotalPrice(0);
    setDiscount(0);
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleBooking}>
        <h2>Book Your Tickets</h2>
        <nav>
          <a href="Website">Home</a>
          <a href="LoginPage">Login</a>
          <a href="SignupPage">Booking</a>
          <a href="ContactForm">Contact</a>
        </nav>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <br />
        <label htmlFor="numberOfTickets"> Tickets:</label>
        <input
          type="number"
          id="numberOfTickets"
          value={numberOfTickets}
          onChange={(e) => setNumberOfTickets(Math.max(1, parseInt(e.target.value)))}
          required
        />
        <br />
        <br />
        <button type="submit">Book Tickets</button>
        <br />
        <br />

        {isBookingSuccess && (
          <div className="success-message">
            <p>Booking Successful! Thank you for your reservation.</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Discount Applied: {discount}%</p>
            <p>Price After Discount: ${totalPrice - (totalPrice * discount) / 100}</p>
            <button onClick={handleReset}>Book Another Ticket</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
