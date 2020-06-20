import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminReducer';

export default combineReducers({
	users: usersReducer,
	auth: authReducer,
	admins: adminsReducer
})