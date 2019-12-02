import React from 'react';
import {connect} from "react-redux";
import { withAuthRedirect } from '../hoc/withAuthRedirect';

function Settings(props) { return <h1>Coming soon!</h1>}

function mapStateToProps (state) {return { isAuth: state.auth.isAuth }}

export default connect(
  mapStateToProps,
  null
 ) ( withAuthRedirect( Settings ) )