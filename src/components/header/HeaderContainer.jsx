import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setAuthUserData } from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      })
      .then( ({data}) => {
        console.log(data);
        console.log(this.props);
        let { id, email, login } = data.data;

        if ( data.resultCode === 0 ) {
          console.log(true);
          this.props.setAuthUserData(id, email, login);
        }
      })
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