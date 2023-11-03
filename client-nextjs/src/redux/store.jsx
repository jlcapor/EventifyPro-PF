import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import eventReducer from './reducers/eventReducer';
import eventTypeReducer from './reducers/eventTypeReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    eventReducer,
    eventTypeReducer,
    cartReducer
},);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store