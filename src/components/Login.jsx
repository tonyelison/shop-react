const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form action="http://localhost:3000/api/login" method="POST">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;