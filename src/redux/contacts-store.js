import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

const rootReducer = combineReducers({
  contactList: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
