import api from './services/api';

function App() {
  return (
    <>
      <h1>Home</h1>
      <h3>Test the API!</h3>
      <button onClick={() => api.hello()}>Test a public endpoint</button>
      <br />
      <button onClick={() => api.helloAuth()}>Test an private endpoint</button>
    </>
  );
}

export default App;
