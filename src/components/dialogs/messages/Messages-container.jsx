import Messages from './Messages';
import {connect} from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/reducers/dialogs-reducer';

function mapStateToProps (state) {
  return {
    messagesPage: state.messagesPage
  }
}

function mapDispatchToProps (dispatch) {
  return {
    newMessageChange: (body) => {
      dispatch( updateNewMessageBodyCreator(body) )
    },
    sendMessage: () => {
      dispatch( sendMessageCreator() )
    }
  }
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) ( Messages )

export default MessagesContainer
