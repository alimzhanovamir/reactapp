const ADD_POST = 'ADD_POST';
const INPUT_POST_TEXT = 'INPUT_POST_TEXT';

export default function profileReducer( state, action ) {
  switch (action.type) {

    case INPUT_POST_TEXT:
      state.newPostText = action.text;
      return state;

    case ADD_POST:
      state.posts.push( action.postText );
      state.newPostText = '';
      return state;

    default:
      return state;

  }
}

export function addPostCreator( name, text ){
  return {
    type: ADD_POST,
    postText: {
      name: name,
      message: text
    }
  }
}

export function onPostChangeCreator( text ){
  return {
    type: INPUT_POST_TEXT,
    text: text
  }
}
