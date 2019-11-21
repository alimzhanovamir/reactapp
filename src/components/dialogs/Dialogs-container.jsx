import React from 'react';
import StoreContext from "../../store-context";
import Dialogs from "./Dialogs";

// Component DialogsContainer
function DialogsContainer(props) {

  return (
      <StoreContext.Consumer>
        {
          (store) => {
            let dialogsData = store.getState().messagesPage.dialogsData;

            return (
              <Dialogs dialogsData={dialogsData}/>
            )
          }
        }
      </StoreContext.Consumer>
  )
}

export default DialogsContainer
