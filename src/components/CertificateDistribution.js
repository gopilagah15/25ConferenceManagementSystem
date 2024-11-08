// components/CertificateDistribution.js
import React from 'react';

const CertificateDistribution = ({ attendees }) => {
  const handleDistributeCertificates = () => {
    attendees.forEach((attendee) => {
      alert(`Certificate for ${attendee.name} has been generated!`);
    });
  };

  return (
    <div>
      <h2>Certificate Distribution</h2>
      <button onClick={handleDistributeCertificates}>Distribute Certificates</button>
    </div>
  );
};

export default CertificateDistribution;
