import React from 'react';
import { addPostCreator, onPostChangeCreator } from "../../../../redux/reducers/profile-reducer";
import NewPost from "./New-post";

// Component NewPostContainer
function NewPostContainer(props ) {
  // Событие ввода текста в <textarea>
  function onPostChange( text ) {
    props.dispatch( onPostChangeCreator( text )  );
  }

  // Событие добавления поста
  function addPost( text ) {
    props.dispatch( addPostCreator('Amir', text) );
  }

  return ( <NewPost updateNewPostText={ onPostChange } addPost={ addPost } newPostText={ props.newPostText } /> )
}

export default NewPostContainer