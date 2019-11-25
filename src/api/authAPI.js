import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
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
  }
}

export default AuthAPI