import { useMutation } from '@tanstack/react-query';
import api from '@/utils/api';
import { useSessionContext } from '@/utils/session-context';

const Login = () => {
  const { setSession } = useSessionContext();

  const loginMutation = useMutation({
    mutationFn: (creds) => api.login(creds),
    onSuccess: (data) => {
      console.log(data);
      setSession(data);
    },
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
    </>
  );
};

export default Login;
