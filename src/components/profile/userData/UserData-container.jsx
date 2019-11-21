// import React from 'react';
import UserData from "./UserData";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    userData: state.profilePage.userData
  }
}

const UserDataContainer = connect(
  mapStateToProps
)( UserData );

export default UserDataContainer