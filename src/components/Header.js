import React from 'react';
import '../styles/Header.css'; // We'll create this CSS file next

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://media-lhr6-2.cdn.whatsapp.net/v/t61.24694-24/358327928_340133682023922_8408065025747917670_n.jpg?ccb=11-4&oh=01_AdREOfarjM6Py4POs6aEBE0rLoCywYZiwHM5twT9eCztjg&oe=654E96B8&_nc_sid=e6ed6c&_nc_cat=104" alt="Videographer Logo" />
        <h1>Alex Lubetkin</h1>
      </div>
      <nav>
          <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
              <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
