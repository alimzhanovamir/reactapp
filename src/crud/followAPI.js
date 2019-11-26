import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/follow',
  headers: {'API-KEY': '2a37d568-1947-4166-acca-c663ae3ffaa8'},
  withCredentials: true
});

const FollowAPI = {
  Follow(userID) {
    return (
      instance
        .post('/'+userID)
        .then( response => {
          return response.data.resultCode
        })
    )
  },
  Unfollow(userID) {
    return (
      instance
        .delete('/'+userID)
        .then( response => {
          return response.data.resultCode
        })
    )
  }
};

export default FollowAPI