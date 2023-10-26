import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import eventReducer from "./reducer";

const store = createStore(
  eventReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
