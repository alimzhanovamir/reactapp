import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function mapStateToProps (state) {
  return {
    dialogsData: state.messagesPage.dialogsData,
  }
}

export default compose(
  connect(mapStateToProps),  
  withAuthRedirect
)(Dialogs);
