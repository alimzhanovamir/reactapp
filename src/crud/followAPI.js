import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
  headers: {'API-KEY': 'bf95a6d5-fe53-4b23-af62-7e85dd9ca2e7'},
  withCredentials: true
});

const FollowAPI = {
  Follow(userID) {
    return (
      instance
        .post(`${userID}`)
        .then( response => {
          return response.data.resultCode
        })
    )
  },
  Unfollow(userID) {
    return (
      instance
        .delete(`${userID}`)
        .then( response => {
          return response.data.resultCode
        })
    )
  }
};

export default FollowAPI