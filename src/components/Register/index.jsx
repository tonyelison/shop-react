import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/Spinner';
import http from '@/utils/http';
import { useSessionContext } from '@/utils/session-context';

const Register = () => {
  const [isLoading, setIsLoading] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const { setSession } = useSessionContext();

  const registerMutation = useMutation({
    mutationFn: (creds) => http.post('users', creds),
    onMutate: () => setIsLoading(true),
    onSuccess: (data, creds) => {
      http
        .post('session', creds)
        .then((session) => {
          setSession(session);
          navigate('/register/email-sent');
        })
        .finally(() => setIsLoading(false));
    },
    onError: () => {
      setErrorMsg('Something went wrong');
      setIsLoading(false);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    registerMutation.mutate({
      username: event.target.username.value,
      password: event.target.password.value,
    });
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
        {isLoading ? <Spinner animation="border" /> : ''}
      </form>
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

export default Register;
