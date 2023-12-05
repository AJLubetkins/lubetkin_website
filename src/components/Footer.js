import React from 'react';
import '../styles/Footer.css';

import CV from './cv.pdf'

function Footer() {
  return (
      <footer className="footer">
	<div className="social-links">
	    <span id="rights-reserved">All rights reserved - Alex Lubetkin</span>
	    <a href="https://www.instagram.com/ajlubetkin/" target="_blank" rel="noopener noreferrer">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png?20200512141346" alt="Instagram" />
            </a>
	    <a href="mailto:ajlubetkin@gmail.com" className="email-link">
		ajlubetkin@gmail.com

            </a>
	    <a href={CV} download="Alex Lubetkin - CV.pdf">
		Download CV
            </a>
      </div>
    </footer>
  );
}

export default Footer;
