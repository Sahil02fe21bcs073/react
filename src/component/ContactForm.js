import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
  };

  return (
    <div className='mmm'>
        <div className='ppp'>
      <h2>Contact Us</h2>
      <nav>
         <a href="Website">Home</a>
        <a href="LoginPage">Login</a>
        <a href="SignupPage">Booking</a>
        <a href="ContactForm">Contact</a>
    
      </nav>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
<br/>
<br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
<br/>
<br/>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
<br/>
<br/>
        <button type="submit">Submit</button>
      </form>
      </div>
      
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default ContactForm;
