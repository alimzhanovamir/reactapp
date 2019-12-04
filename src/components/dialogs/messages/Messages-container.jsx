import Messages from './Messages';
import {connect} from "react-redux";
import { sendMessageCreator } from '../../../redux/reducers/dialogs-reducer';

function mapStateToProps (state) {
  return {
    messagesPage: state.messagesPage
  }
}

function mapDispatchToProps (dispatch) {
  return {
    sendMessage: (messagesText) => {
      dispatch( sendMessageCreator(messagesText) )
    }
  }
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) ( Messages )

export default MessagesContainer
