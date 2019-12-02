import React from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import Profile from "./Profile";
import { loadProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from "react-router-dom";

// Component Profile Container
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.loadProfile( this.props.match.params.userID /* user id */ );
  }

  componentDidUpdate() {  
    this.props.loadProfile( this.props.match.params.userID /* user id */ );
  }

  render() {
    return (
      <Profile/>
    )
  }
}

// userID получаем с сервера
// function mapStateToProps(state) {
//   return {
//     userID: state.auth.userID
//   }
// }

export default connect(
    null,
  {
    loadProfile
  }
) ( withRouter(ProfileContainer) )
