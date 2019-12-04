import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
  headers: {'API-KEY': 'bf95a6d5-fe53-4b23-af62-7e85dd9ca2e7'},
  withCredentials: true
});

const AuthAPI = {
  getAuth() {
    return (
      instance
        .get('me', {
          withCredentials: true
        })
        .then( response => {
          return response.data
        })
    )
  },
  login(properties) {
    let prop = {
      email: properties.loginEmail,
      password: properties.loginPassword,
      rememberMe: properties.rememberMe
    }
    return (
      instance
        .post(`login`, prop)
    )
  }
}

export default AuthAPI