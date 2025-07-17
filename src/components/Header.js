import { Link } from 'react-router-dom';
import '../assets/styles/App.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/chefs">Повара</Link>
      </nav>
    </header>
  );
};

export default Header;