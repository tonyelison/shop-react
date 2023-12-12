import api from '@/utils/api';

const Home = () => {
  return (
    <>
      <h3>Test the API!</h3>
      <button onClick={() => api.hello()}>Test a public endpoint</button>
      <br />
      <button onClick={() => api.helloAuth()}>Test an private endpoint</button>
    </>
  );
};

export default Home;
