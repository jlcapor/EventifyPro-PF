import { 
    FETCH_EVENT_REQUEST, 
    FETCH_EVENT_SUCCESS, 
    FETCH_EVENT_FAILED,
    SEARCH_EVENT_REQUEST,
    SEARCH_EVENT_SUCCESS,
    SEARCH_EVENT_FAILED,
    FETCH_EVENT_BY_ID_REQUES,
    FETCH_EVENT_BY_ID_SUCCESS,
    FETCH_EVENT_BY_ID_FAILED,
} from "../action-type/eventConstans";
import axios from 'axios';


export const fetchEvents = ()=>{
    return async (dispatch)=>{
        dispatch({ type:FETCH_EVENT_REQUEST});
       try {
        const { data } = await axios.get('http://localhost:3001/events');
        dispatch({ type: FETCH_EVENT_SUCCESS, payload: data });
       } catch (error) {
        dispatch({type: FETCH_EVENT_FAILED,  payload: error.response.data.error})
       }
    }
}


export const searchEvent = (name) => {
    return async (dispatch) =>{
       try {
            dispatch({type: SEARCH_EVENT_REQUEST})
            const response = await axios.get(`http://localhost:3001/events?name=${name}`);
            return dispatch({
                type: SEARCH_EVENT_SUCCESS,
                payload : response.data
            })
       } catch (error) {
        dispatch({
            type: SEARCH_EVENT_FAILED, 
            payload: error.response.data.error
        })
       }
    }
}


export const filterEventById = (id) => {
    console.log(id)
    return async (dispatch) =>{
            dispatch({type: FETCH_EVENT_BY_ID_REQUES})
        try {
            const {data} = await axios.get(`http://localhost:3001/events/eventsById/${id}`);
            dispatch({type: FETCH_EVENT_BY_ID_SUCCESS,  payload : data})
        } catch (error) {
            dispatch({
                type: FETCH_EVENT_BY_ID_FAILED, 
                payload: error.response.data.error
            })
        }
    }
};



