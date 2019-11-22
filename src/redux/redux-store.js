import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import lastDialogsReducer from "./reducers/last-dialogs-reducer";
import userReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  profilePage:  profileReducer,
  messagesPage: dialogsReducer,
  usersPage:    userReducer,
  lastDialogs:  lastDialogsReducer
});

let store = createStore( reducers );

export default store;