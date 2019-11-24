import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import './Profile.css';
import Profile from "./Profile";
import { setUserProfile } from '../../redux/reducers/profile-reducer';

// Component Profile Container
class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
) ( ProfileContainer )
