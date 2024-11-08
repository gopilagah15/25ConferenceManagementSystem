// components/Reports.js
import React, { useState } from 'react';

const Reports = ({ attendees, feedback, addFeedback }) => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    addFeedback(feedbackText);
    setFeedbackText('');
    alert('Thank you for your feedback!');
  };

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Attendees: {attendees.length}</p>
      
      <h3>Feedback</h3>
      <form onSubmit={handleFeedbackSubmit}>
        <textarea 
          value={feedbackText} 
          onChange={(e) => setFeedbackText(e.target.value)} 
          placeholder="Enter your feedback" 
          required 
        />
        <button type="submit">Submit Feedback</button>
      </form>
      
      <h3>Feedback Received</h3>
      <ul>
        {feedback.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
