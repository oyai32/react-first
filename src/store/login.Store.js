import { makeAutoObservable } from "mobx";
import { login } from '../services';

class LoginStore {

  constructor() {
    makeAutoObservable(this);
  }

  async login ({ username, password }) {
    const res = await login({ username, password });
    console.log(res);
  }
}

export default LoginStore;