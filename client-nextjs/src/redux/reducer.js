const initialState = {
  eventTypes: [],
  events: [],
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_EVENT":
      return { ...state, events: [...state.events, action.payload] };
    case "GET_EVENT_TYPES":
      return {
        ...state,
        eventTypes: action.payload,
      };
    default:
      return state;
  }
}
