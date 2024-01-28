import React, { useState } from 'react';
import axios from 'axios';

function Passwordreset() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email to the server
      const response = await axios.post('https://apifordropment.online/send-email', { email });

      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Passwordreset;