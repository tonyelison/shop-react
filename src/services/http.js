const API_URL = import.meta.env.VITE_API_URL;
const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PACTH',
  DELETE: 'DELETE',
};

const http = (() => {
  const req = async (method, endpoint, body, options) => {
    const headers = new Headers();
    if ([Method.POST, Method.PUT, Method.PATCH].includes(method)) {
      headers.append('Content-Type', 'application/json');
    }

    const reqOptions = {
      method,
      headers,
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
    get: (...args) => req(Method.GET, ...args),
    post: (...args) => req(Method.POST, ...args),
    put: (...args) => req(Method.PUT, ...args),
    patch: (...args) => req(Method.PATCH, ...args),
    del: (...args) => req(Method.DELETE, ...args),
  };
})();

export default http;
