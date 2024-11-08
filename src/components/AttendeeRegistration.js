// components/AttendeeRegistration.js
import React, { useState } from 'react';

const AttendeeRegistration = ({ addAttendee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAttendee({ name, email });
    setName('');
    setEmail('');
    alert(`Thank you, ${name}, for registering!`);
  };

  return (
    <div>
      <h2>Attendee Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AttendeeRegistration;
