import api from '../services/api';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const creds = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    api.register(creds);
  };

  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <br />
      <Link to="/login">Log In</Link>
      <br />
      <Link to="/">Home</Link>
    </>
  );
};

export default Register;
