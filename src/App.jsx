import api from './services/api';

function App() {
  return (
    <>
      <button onClick={() => api.hello()}>Test the API!</button>
    </>
  );
}

export default App;
