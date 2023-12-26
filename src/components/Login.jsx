import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import http from '@/utils/http';
import Form from '@/components/Form';
import { useSessionContext } from '@/utils/session-context';

const Login = () => {
  const [isLoading, setIsLoading] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const { setSession } = useSessionContext();

  const loginMutation = useMutation({
    mutationFn: (creds) => {
      setIsLoading(true);
      return http.post('session', creds);
    },
    onSuccess: (data) => {
      setSession(data);
      navigate('/');
    },
    onError: () => {
      setErrorMsg('Something went wrong');
    },
    onSettled: () => setIsLoading(false),
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    loginMutation.mutate({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <Form submitHandler={submitHandler} isLoading={isLoading} />
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

export default Login;
