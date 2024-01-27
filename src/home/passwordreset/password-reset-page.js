import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { email } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    try {
      // Make a request to your server to update the password
      const response = await axios.post('/api/reset-password', { email, newPassword });

      // Assuming your server sends a success message
      setMessage(response.data.message);
    } catch (error) {
      // Handle error, e.g., display an error message
      setMessage('Error resetting password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <p>Resetting password for {email}</p>
      
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button onClick={handlePasswordReset}>Reset Password</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;