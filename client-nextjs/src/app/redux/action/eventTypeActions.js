import { GET_EVENTTYPES } from "../action-type/eventTypeConstans";
import axios from "axios";

const URL = "http://localhost:3001/events/";

export const getAllEventTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/events/types`);
      return dispatch({
        type: GET_EVENTTYPES,
        payload: data,
      });
    } catch (error) {
      throw Error(error.response.data.error);
    }
  };
};
