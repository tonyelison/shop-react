import { useNavigate } from 'react-router-dom';
import http from '@/utils/http';
import Form from '@/components/Form';
import { useSessionContext } from '@/utils/session-context';

const Login = () => {
  const navigate = useNavigate();
  const { setSession } = useSessionContext();

  const mutationFn = (creds) => http.post('session', creds);
  const onSuccess = (data) => {
    setSession(data);
    navigate('/');
  };

  const formFields = [
    { name: 'username', label: 'Username', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  return (
    <Form
      title="Login"
      fields={formFields}
      submitLabel="Log in"
      mutationFn={mutationFn}
      onSuccess={onSuccess}
    />
  );
};

export default Login;
