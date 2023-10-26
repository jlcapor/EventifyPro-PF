import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import eventReducer from './reducers/eventReducer';

const rootReducer = combineReducers({
    event: eventReducer,
},);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store