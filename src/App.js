// App.js
import React, { useState } from 'react';
import AttendeeRegistration from './components/AttendeeRegistration';
import EventNotifications from './components/EventNotifications';
import CertificateDistribution from './components/CertificateDistribution';
import Reports from './components/Reports';

const App = () => {
  const [attendees, setAttendees] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const addAttendee = (attendee) => setAttendees([...attendees, attendee]);
  const addFeedback = (newFeedback) => setFeedback([...feedback, newFeedback]);

  return (
    <div>
      <h1>Conference Management System</h1>
      <AttendeeRegistration addAttendee={addAttendee} />
      <EventNotifications attendees={attendees} />
      <CertificateDistribution attendees={attendees} />
      <Reports attendees={attendees} feedback={feedback} addFeedback={addFeedback} />
    </div>
  );
};

export default App;
