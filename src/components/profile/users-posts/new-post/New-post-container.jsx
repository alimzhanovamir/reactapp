import React from 'react';
import { addPostCreator, onPostChangeCreator } from "../../../../redux/reducers/profile-reducer";
import NewPost from "./New-post";
import StoreContext from "../../../../store-context";

// Component NewPostContainer
function NewPostContainer(props ) {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().profilePage;
          // debugger
          // Событие ввода текста в <textarea>
          function onPostChange( text ) {
            store.dispatch( onPostChangeCreator( text )  );
          }

          // Событие добавления поста
          function addPost( text ) {
            store.dispatch( addPostCreator('Amir', text) );
          }

          return (
            <NewPost
              updateNewPostText={onPostChange}
              addPost={addPost}
              newPostText={state.newPostText}/>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default NewPostContainer