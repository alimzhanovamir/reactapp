import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import lastDialogsReducer from "./reducers/last-dialogs-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage:  profileReducer,
  messagesPage: dialogsReducer,
  usersPage:    usersReducer,
  lastDialogs:  lastDialogsReducer,
  auth: authReducer,
  form: formReducer
});

// Export store
export default createStore( reducers, applyMiddleware(thunkMiddleware) );