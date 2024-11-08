// components/EventNotifications.js
import React, { useEffect } from 'react';

const EventNotifications = ({ attendees }) => {
  useEffect(() => {
    if (attendees.length > 0) {
      attendees.forEach((attendee) => {
        alert(`Hello ${attendee.name}, the event schedule is coming up!`);
      });
    }
  }, [attendees]);

  return (
    <div>
      <h2>Event Notifications</h2>
      <p>Notifications have been sent to all registered attendees.</p>
    </div>
  );
};

export default EventNotifications;
