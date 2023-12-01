import api from '../api';

const Signup = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const creds = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    api.signup(creds);
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Signup" />
      </form>
    </>
  );
};

export default Signup;
