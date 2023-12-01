const API_URL = import.meta.env.VITE_API_URL;

const http = (() => {
  const req = async (endpoint, body, options) => {
    const reqOptions = {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(body),
      mode: 'cors',
      ...options,
    };

    try {
      const response = await fetch(`${API_URL}/${endpoint}`, reqOptions);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    get: (...args) => req(...args),
    post: (endpoint, body, options) =>
      req(endpoint, body, { method: 'POST', ...options }),
    put: (endpoint, body, options) =>
      req(endpoint, body, { method: 'PUT', ...options }),
    patch: (endpoint, body, options) =>
      req(endpoint, body, { method: 'PATCH', ...options }),
    del: (endpoint, body, options) =>
      req(endpoint, body, { method: 'DELETE', ...options }),
  };
})();

const api = (() => ({
  hello: () => http.get('hello'),
  login: (creds) => http.post('login', creds),
  signup: (creds) => http.post('signup', creds),
}))();

export default api;
