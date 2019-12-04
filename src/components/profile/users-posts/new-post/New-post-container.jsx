import { addPostCreator } from "../../../../redux/reducers/profile-reducer";
import NewPost from "./New-post";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    fullName: state.profilePage.profile ? state.profilePage.profile.fullName : 'none'
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (name, messageText) => {
      dispatch( addPostCreator(name, messageText) );
    }
  }
}

const NewPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (NewPost);

export default NewPostContainer