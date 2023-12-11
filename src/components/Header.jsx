import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
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
            <Link to="/products">Products</Link>
          </li>
          <li className="flex-right">
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Create Account</Link>
          </li>
          <li>
            <DropdownButton id="avatar-dropdown" title="Dropdown">
              <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
              <Dropdown.Item href="#action/3.2">Another action</Dropdown.Item>
              <Dropdown.Item href="#action/3.3">Something</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
