import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Form from '@/components/Form';
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

  const submitHandler = async (event) => {
    event.preventDefault();

    registerMutation.mutate({
      username: event.target.username.value,
      password: event.target.password.value,
    });
  };

  return (
    <>
      <h1>Create Account</h1>
      <Form submitHandler={submitHandler} isLoading={isLoading} />
      {errorMsg ? <div className="text-danger">{errorMsg}</div> : ''}
    </>
  );
};

export default Register;
