import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownMenu } from 'react-bootstrap';
import { useSessionContext } from '@/utils/session-context';
import api from '@/utils/api';
import './Header.scss';

const Header = () => {
  const { session, clearSession } = useSessionContext();

  const logoutHandler = () => {
    api.logout().then(clearSession);
  };

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
          <li className="ms-auto">
            <Dropdown className="avatar-dropdown">
              <Dropdown.Toggle variant="outline-light">
                <img src="./src/assets/user.svg"></img>
              </Dropdown.Toggle>
              <DropdownMenu>
                {session ? (
                  <Dropdown.Item onClick={logoutHandler}>Log Out</Dropdown.Item>
                ) : (
                  <>
                    <Dropdown.Item as={Link} to="/login">
                      Log In
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register">
                      Create Account
                    </Dropdown.Item>
                  </>
                )}
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
