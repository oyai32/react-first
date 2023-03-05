import { http } from '../services/http';

export function login ({ username, password }) {
  return http.post('/authorizations', {
    mobile: username,
    code: password
  });
}