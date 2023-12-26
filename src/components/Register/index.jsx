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
    { name: 'first_name', label: 'First Name', required: true },
    { name: 'last_name', label: 'Last Name', required: true },
    { name: 'username', label: 'Email Address', type: 'email', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
  ];

  return (
    <Form
      title="Create Account"
      fields={formFields}
      submitLabel="Sign up"
      mutationFn={mutationFn}
      onSuccess={onSuccess}
    />
  );
};

export default Register;
