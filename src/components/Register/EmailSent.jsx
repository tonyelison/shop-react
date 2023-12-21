const EmailSent = () => {
  return (
    <>
      <h1>Please verify your email.</h1>
      <p>
        For security purposes, we sent you an email to verify your identity. Tap
        the button in the email we sent to {} to confirm this address.
      </p>
      <button>Resend Email</button>
    </>
  );
};

export default EmailSent;
