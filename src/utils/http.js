import { API_URL } from '@/config';

const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PACTH',
  DELETE: 'DELETE',
};

const http = (() => {
  // Build and execute a fetch request
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
      credentials: 'include',
      ...options,
    };

    const response = await fetch(`${API_URL}/${endpoint}`, reqOptions).catch(
      (error) => console.log(error),
    );
    try {
      return await response.json();
    } catch (error) {
      /* do nothing; no parseable json body */
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
