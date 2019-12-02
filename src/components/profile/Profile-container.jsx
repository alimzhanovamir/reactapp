import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './Profile.css';
import Profile from "./Profile";
import { loadProfile } from '../../redux/reducers/profile-reducer';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

// Component Profile Container
class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.loadProfile( this.props.match.params.userID /* user id */ );
  }

  componentDidUpdate() {  
    this.props.loadProfile( this.props.match.params.userID /* user id */ );
  }

  render() { return (<Profile/>) }
}

export default compose(
  connect(null,{loadProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
