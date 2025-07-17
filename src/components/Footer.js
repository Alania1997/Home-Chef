import { Link } from 'react-router-dom';
import '../assets/styles/App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Home Chef</p>
        <div className="footer-links">
          <Link to="/about">О нас</Link>
          <Link to="/privacy">Конфиденциальность</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;