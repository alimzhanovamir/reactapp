import Dialogs from "./Dialogs";
import {connect} from "react-redux";

function mapStateToProps (state) {
  return {
    dialogsData: state.messagesPage.dialogsData
  }
}

const DialogsContainer = connect(
  mapStateToProps
) ( Dialogs )

export default DialogsContainer
