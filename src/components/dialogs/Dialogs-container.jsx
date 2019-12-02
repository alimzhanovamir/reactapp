import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    dialogsData: state.messagesPage.dialogsData,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(
  mapStateToProps
) ( Dialogs )

export default DialogsContainer
