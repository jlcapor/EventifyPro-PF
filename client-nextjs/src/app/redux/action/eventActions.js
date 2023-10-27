import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILED,
  SEARCH_EVENT_REQUEST,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAILED,
  CREATE_EVENT,
} from "../action-type/eventConstans";
import axios from "axios";

export const createEvent = (event) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/events/", event);
      return dispatch({ type: CREATE_EVENT, payload: data });
    } catch (error) {
      throw Error(error.response.data.error);
    }
  };
};

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_EVENT_REQUEST });
    try {
      const { data } = await axios.get("http://localhost:3001/events");
      dispatch({ type: FETCH_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: FETCH_EVENT_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};

export const searchEvent = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEARCH_EVENT_REQUEST });
      const response = await axios.get(
        `http://localhost:3001/events?name=${name}`
      );
      return dispatch({
        type: SEARCH_EVENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_EVENT_FAILED,
        payload: error.response.data.error,
      });
    }
  };
};