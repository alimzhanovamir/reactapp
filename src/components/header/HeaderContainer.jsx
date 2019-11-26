import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from "../../redux/reducers/auth-reducer";
import AuthAPI from "../../crud/authAPI";

class HeaderContainer extends React.Component {
  componentDidMount() {

    AuthAPI.getAuth()
      .then( data => {
        let { id, email, login } = data.data;

        if ( data.resultCode === 0 ) {
          this.props.setAuthUserData(id, email, login);
        }
      });

  }

  render() {
    return <Header {...this.props}/>
  }
}
function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}
export default connect(
  mapStateToProps,
  { setAuthUserData }
)( HeaderContainer )