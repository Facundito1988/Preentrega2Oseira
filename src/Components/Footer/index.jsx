import React from "react";
import  './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://api.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      <div className="footer__text">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Tu Tienda Online</p>
      </div>
    </footer>
  );
};

export default Footer;
