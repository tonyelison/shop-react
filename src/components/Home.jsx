import api from '@/utils/api';

const Home = () => {
  return (
    <>
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
