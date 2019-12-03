import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
  headers: {'API-KEY': 'bf95a6d5-fe53-4b23-af62-7e85dd9ca2e7'},
  withCredentials: true
});

const profileAPI = {

  loadProfile(userID) {
    return instance
      .get(`${userID}`)
      .then( ({ data }) => {
        return data;
      });
  },

  getUserStatus(userID) {
    return instance
      .get(`status/${userID}`)
      .then( ({ data }) => {
        return data
      });
  },

  updateUserStatus(status) {
    return instance
      .put('status', { status: status }) 
  }
};

export default profileAPI