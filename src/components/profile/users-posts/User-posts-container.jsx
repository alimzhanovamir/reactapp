import React from 'react';
import StoreContext from "../../../store-context";
import UsersPosts from "./Users-posts";

// Component UserPostsContainer
function UserPostsContainer(props) {

  return (
      <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          console.log(state);
          return (
              <UsersPosts
                posts={ state.profilePage.posts }
                newPostText={ state.profilePage.newPostText }
                dispatch={ store.dispatch }/>
          )
        }
      }
      </StoreContext.Consumer>
  )
}

export default UserPostsContainer
