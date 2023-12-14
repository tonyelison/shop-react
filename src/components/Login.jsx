import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import http from '@/utils/http';
import { useSessionContext } from '@/utils/session-context';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const { setSession } = useSessionContext();

  const loginMutation = useMutation({
    mutationFn: (creds) => http.post('session', creds),
    onSuccess: (data) => {
      setSession(data);
      navigate('/');
    },
    onError: (error) => setErrorMsg(error),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    loginMutation.mutate({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Log In" />
      </form>
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

export default Login;
