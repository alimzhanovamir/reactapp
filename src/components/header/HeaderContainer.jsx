import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthInfo } from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthInfo();
  }

  render() {
    return <Header {...this.props}/>
  }
}
function mapStateToProps(state) {
  return {
    // Auth status :: boolean
    isAuth: state.auth.isAuth,
    // Auth name :: string
    login: state.auth.login
  }
}
export default connect(
  mapStateToProps,
  { getAuthInfo }
)( HeaderContainer )