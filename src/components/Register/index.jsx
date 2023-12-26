import { useNavigate } from 'react-router-dom';
import Form from '@/components/Form';
import http from '@/utils/http';
import { useSessionContext } from '@/utils/session-context';

const Register = () => {
  const navigate = useNavigate();
  const { setSession } = useSessionContext();

  const mutationFn = (creds) => http.post('users', creds);
  const onSuccess = async (data, creds) => {
    const session = await http.post('session', creds);
    setSession(session);
    navigate('/register/email-sent');
  };

  const formFields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <Form
      title="Create Account"
      fields={formFields}
      submitBtnLabel="Log in"
      mutationFn={mutationFn}
      onSuccess={onSuccess}
    />
  );
};

export default Register;
