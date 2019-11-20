import React from 'react';
import StoreContext from "../../../store-context";
import UserData from "./UserData";

// Component UserDataContainer
function UserDataContainer(props) {

  return (
      <StoreContext.Consumer>
      {
        (store) => {
          let userData = store.getState().profilePage.userData;
          // debugger
          return ( <UserData userData={ userData }/> )
        }
      }
      </StoreContext.Consumer>
  )
}

export default UserDataContainer