import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import http from '@/utils/http';

const EmailSent = () => {
  const navigate = useNavigate();

  const resendEmailMutation = useMutation({
    mutationFn: () => http.post('verification/resend-email'),
    onError: () => navigate('/login'),
  });

  return (
    <>
      <h1>Please verify your email.</h1>
      <p>
        For security purposes, we sent you an email to verify your identity. Tap
        the button in the email we sent to {} to confirm this address.
      </p>
      <button
        className="btn btn-outline-primary"
        onClick={resendEmailMutation.mutate}
      >
        Resend Email
      </button>
      {resendEmailMutation.isSuccess ? 'Email resent!' : ''}
    </>
  );
};

export default EmailSent;
