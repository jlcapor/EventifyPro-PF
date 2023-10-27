import {  
    FETCH_EVENT_REQUEST, 
    FETCH_EVENT_SUCCESS, 
    FETCH_EVENT_FAILED,
    SEARCH_EVENT_REQUEST,
    SEARCH_EVENT_SUCCESS,
    SEARCH_EVENT_FAILURED,
    FILTER_EVENTTYPE,
    FILTER_EVENT_DATE
} from "../action-type/eventConstans"

const initialState ={
    events: [],
    eventsBackup: [],
    filteredEvents:[]
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


        case SEARCH_EVENT_REQUEST:
            return{
                ...state,
				loading: true,
            }
        
        case SEARCH_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
                filteredEvents: action.payload
            }
        
        case SEARCH_EVENT_FAILURED:
            return {
                ...state,
                loading: true,
				error: action.payload,
            }
        case FILTER_EVENTTYPE:
            const newFilteredEvent= state.eventsBackup.filter(e=> e.eventType === action.payload);
            return {
                ...state,
                events: newFilteredEvent
            }

        case FILTER_EVENT_DATE:
            const newFilteredEventDate= state.eventsBackup.filter(e=> e.date === action.payload);
            return {
                ...state,
                events: newFilteredEventDate
            }
        default:
          return state; 
    }
}


export default eventReducer