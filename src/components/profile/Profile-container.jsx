import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import './Profile.css';
import Profile from "./Profile";
import { setUserProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from "react-router-dom";

// Component Profile Container
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) userID = 5270;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then( ({data}) => {
        this.props.setUserProfile(data)
      });
  }

  render() {
    return (
      <Profile/>
    )
  }
}

export default connect(
  null,
  {
    setUserProfile
  }
) ( withRouter(ProfileContainer) )
