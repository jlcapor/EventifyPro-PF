import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILED,
  SEARCH_EVENT_REQUEST,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAILED,
  CREATE_EVENT,
} from "../action-type/eventConstans";

const initialState = {
  events: [],
  eventsBackup: [],
  filteredEvents: [],
};
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return { ...state, events: [...state.events, action.payload] };
    case FETCH_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        events: action.payload,
        eventsBackup: action.payload,
      };
    case FETCH_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SEARCH_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
        filteredEvents: action.payload,
      };

    case SEARCH_EVENT_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
