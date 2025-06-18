import React from 'react';
import '../styles/Header.css'; // We'll create this CSS file next


function Header({ renderPage }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Alex Poobetkin</h1>
      </div>
      <nav>
          <ul>
	      <li><a onClick={() => renderPage('home')}>Portfolio</a></li>
          <li><a onClick={() => renderPage('about')}>About</a></li>
          <li><a onClick={() => renderPage('contact')}>Contact</a></li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
