import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id='footer' className="footer">
      <div className="footer-content">
        <p>&copy; Add un floro</p>
        <div className="footer-links">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Política</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;