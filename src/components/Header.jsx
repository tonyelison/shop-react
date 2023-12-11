import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Logo</Link>
      </h1>
      <nav>
        <h3>
          <Link to="/login">Log In</Link>
        </h3>
        <h3>
          <Link to="/register">Create Account</Link>
        </h3>
        <h3>
          <Link to="/products">View Products</Link>
        </h3>
      </nav>
    </header>
  );
};

export default Header;
