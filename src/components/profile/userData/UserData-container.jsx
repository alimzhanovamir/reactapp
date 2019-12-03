// import React from 'react';
import UserData from "./UserData";
import {connect} from "react-redux";
import { uploadStatus } from '../../../redux/reducers/profile-reducer';

function mapStateToProps (state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

const UserDataContainer = connect(
  mapStateToProps,
  {
    uploadStatus
  }
)( UserData );

export default UserDataContainer