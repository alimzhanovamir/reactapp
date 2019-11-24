import { addPostCreator, onPostChangeCreator } from "../../../../redux/reducers/profile-reducer";
import NewPost from "./New-post";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    newPostText: state.profilePage.newPostText,
    fullName: state.profilePage.profile ? state.profilePage.profile.fullName : 'none'
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateNewPostText: text => {
      dispatch(onPostChangeCreator( text ))
    },
    addPost: (name, text) => {
      dispatch( addPostCreator(name, text) );
    }
  }
}

const NewPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (NewPost);

export default NewPostContainer