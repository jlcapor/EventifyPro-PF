import { GET_EVENTTYPES } from "../action-type/eventTypeConstans";
import axios from 'axios';

export const getAllEventTypes = () => {
    return async(dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/eventTypes');
            return dispatch({
                type: GET_EVENTTYPES,
                payload: data
            })
        } catch (error) {
            throw Error(error.response.data.error) 
        }
    }
  }

