import api from '@/utils/api';
import { useSessionContext } from '@/utils/session-context';

const Home = () => {
  const { session } = useSessionContext();

  return (
    <>
      {session ? (
        <h1 className="mb-3">Hello, {session.user.first_name}!</h1>
      ) : (
        ''
      )}
      <h3>Test the API!</h3>
      <button className="btn btn-primary" onClick={() => api.hello()}>
        Test a public endpoint
      </button>
      <br />
      <button className="btn btn-primary" onClick={() => api.helloAuth()}>
        Test a private endpoint
      </button>
    </>
  );
};

export default Home;
