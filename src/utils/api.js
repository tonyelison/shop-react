import http from './http';

const api = (() => ({
  hello: () => http.get('hello'),
  helloAuth: () => http.get('hello/auth'),
  register: (creds) => http.post('users', creds),
  login: (creds) => http.post('session', creds),
  logout: (creds) => http.del('session', creds),
}))();

export default api;
