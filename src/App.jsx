import api from './services/api';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Home</h1>

      <h3>
        <Link to="login">Log In</Link>
      </h3>
      <h3>
        <Link to="register">Create Account</Link>
      </h3>
      <h3>
        <Link to="products">View Products</Link>
      </h3>

      <h3>Test the API!</h3>
      <button onClick={() => api.hello()}>Test a public endpoint</button>
      <br />
      <button onClick={() => api.helloAuth()}>Test an private endpoint</button>
    </>
  );
}

export default App;
