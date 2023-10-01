import React, { useState } from 'react';
import { auth } from '../firebase';

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegistration = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Registration successful
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
