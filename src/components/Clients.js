import React from 'react';
import '../styles/Clients.css';

const clients = [
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
        'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
        'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
    'https://www.4sales.com/_flysystem/s3filesystem/inline-images/1667468164261.jpg',
  // Add more client images as needed
];

function Clients() {
  return (
    <section className="clients" id="clients">
      <h2>Who I've Worked With</h2>
      <div className="client-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-item">
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
