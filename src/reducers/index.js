import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotoFormReducers from './PhotoFormReducers';
import photoList from './photoList';

export default combineReducers({
   auth: AuthReducer,
   PhotoFormReducers: PhotoFormReducers,
   photoList
});