import React from 'react';
import './Footer.css'; // Стили (создадим ниже)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Home Chef</h3>
        </div>
        
        <div className="footer-links">
          <a href="/about">О нас</a>
          <a href="/contacts">Контакты</a>
          <a href="/privacy">Политика конфиденциальности</a>
        </div>
        
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Мой Сайт. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;