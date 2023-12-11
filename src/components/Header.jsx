import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Create Account</Link>
          </li>
          <li>
            <Link to="/products">View Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
