import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/users',
  withCredentials: true
});

const UsersAPI = {
  getUsers(pageNumber, pageSize) {
    return (
      instance
        .get(`?page=${pageNumber}&count=${pageSize}`)
        .then( response => {
          return response.data;
        })
    )
  }
};

export default UsersAPI