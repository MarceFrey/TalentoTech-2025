import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/acercade" className="nav-link">Sobre Nosotros</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
          <li><Link to="/admin" className="nav-link">Login</Link></li>
          <li><Link to="/carrito" className="nav-link">Carrito de Compras</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
