// import React from 'react';
import UserData from "./UserData";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    profile: state.profilePage.profile
  }
}

const UserDataContainer = connect(
  mapStateToProps
)( UserData );

export default UserDataContainer