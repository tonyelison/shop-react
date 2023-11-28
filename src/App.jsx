// import { useEffect } from 'react';

function App() {

  const testApi = () => {
    fetch('http://localhost:3000/api/hello')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={testApi}>Test the API!</button>
    </>
  )
}

export default App
