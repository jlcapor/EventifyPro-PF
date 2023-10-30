import {
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_FAILED,
  SEARCH_EVENT_REQUEST,
  SEARCH_EVENT_SUCCESS,
  SEARCH_EVENT_FAILED,
  FILTER_EVENTTYPE,
  FILTER_EVENT_DATE,
  CREATE_EVENT,
  GET_EVENTS,
  SET_CURRENT_PAGE,
} from "../action-type/eventConstans";

const initialState = {
  events: [],
  eventsBackup: [],
  eventsFilter: [],
  doubleFilter: [],
  filteredType: [],
  pagination: {
    currentPage: 1,
  },
};
const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.payload, eventsFilter: action.payload };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
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
        filteredEventDates: action.payload,
      };

    case SEARCH_EVENT_FAILED:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };

    case FILTER_EVENT_DATE:
      let filteredEventDates;
      const filterArr = state.filteredType.length;
      if (filterArr === 0) {
        console.log("No hay filtro");
        if (!action.payload) {
          filteredEventDates = state.eventsBackup;

          return {
            ...state,
            events: filteredEventDates,
            doubleFilter: [],
          };
        } else {
          filteredEventDates = state.eventsBackup.filter(
            (e) => e.date === action.payload
          );

          return {
            ...state,
            events: filteredEventDates,
            doubleFilter: filteredEventDates,
          };
        }
      } else {
        console.log("Estoy aqui");
        if (!action.payload) {
          filteredEventDates = state.filteredType;

          return {
            ...state,
            events: filteredEventDates,
          };
        } else {
          filteredEventDates = state.filteredType.filter(
            (event) => event.date === action.payload
          );

          return {
            ...state,
            events: filteredEventDates,
          };
        }
      }

    case FILTER_EVENTTYPE:
      let filterEventTypes;

      if (state.doubleFilter.length > 0) {
        console.log("Tiene un filtro aplicado, toca combinar");
        if (action.payload === "all") {
          filterEventTypes = state.doubleFilter;

          return {
            ...state,
            events: filterEventTypes,
          };
        } else {
          console.log(state.doubleFilter);
          filterEventTypes = state.doubleFilter.filter(
            (event) => event.EventTypeId === parseInt(action.payload)
          );

          if (filterEventTypes.length === 0) {
            filterEventTypes = state.doubleFilter;
            alert("No hay eventos con esas especificaciones");
            return {
              ...state,
              events: filterEventTypes,
            };
          }

          return {
            ...state,
            events: [...filterEventTypes],
            filteredType: filterEventTypes,
          };
        }
      } else {
        if (action.payload === "all") {
          filterEventTypes = state.eventsBackup;
          return {
            ...state,
            events: [...filterEventTypes],
            filteredType: [],
          };
        } else {
          filterEventTypes = state.eventsBackup.filter(
            (e) => e.EventTypeId === parseInt(action.payload)
          );

          return {
            ...state,
            events: [...filterEventTypes],
            filteredType: filterEventTypes,
          };
        }
      }

    case SET_CURRENT_PAGE: // Nuevo caso para manejar la acción de paginación
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    default:
      return state;
  }
};

export default eventReducer;
