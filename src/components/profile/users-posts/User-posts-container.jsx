import UsersPosts from "./Users-posts";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    posts: state.profilePage.posts
  }
}

export default connect(
  mapStateToProps
) (UsersPosts);
