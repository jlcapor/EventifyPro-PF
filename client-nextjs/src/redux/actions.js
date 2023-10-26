import axios from "axios";

const URL = "http://localhost:3001/events/";

export function getEventTypes() {
  const endpoint = `${URL}typeevents`;
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({
      type: "GET_EVENT_TYPES",
      payload: data,
    });
  };
}

export function createEvent(event) {
  return async (dispatch) => {
    const { data } = await axios.post(URL, event);
    return dispatch({ type: "CREATE_EVENT", payload: data });
  };
}
