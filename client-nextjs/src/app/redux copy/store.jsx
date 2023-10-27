import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import eventReducer from './reducers/eventReducer';
import eventTypeReducer from './reducers/eventTypeReducer';

const rootReducer = combineReducers({
    eventReducer,
    eventTypeReducer
},);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store