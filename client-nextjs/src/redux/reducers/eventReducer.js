import {  
    FETCH_EVENT_REQUEST, 
    FETCH_EVENT_SUCCESS, 
    FETCH_EVENT_FAILED  
} from "../action-type/eventConstans"

const initialState ={
    events: [],
    eventsBackup: [],

}
const eventReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                events: action.payload,
                eventsBackup: action.payload
            }
        case FETCH_EVENT_FAILED:
            return {
                ...state,
				loading: false,
				error: action.payload,
            }

        default:
          return state; 
    }
}


export default eventReducer