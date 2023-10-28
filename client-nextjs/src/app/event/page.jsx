'use client';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "@/components/Container";
import { setCurrentPage } from "../../redux/action/eventActions";
import EventCards from "@/components/EventCards/EventCards";
import Filters from "@/components/Filters/Filters";
import SearchBar from "@/components/SearchBar/SearchBar";
import { fetchEvents, searchEvent, filterEventType, filterEventDate } from "@/redux/action/eventActions";
import { getAllEventTypes } from "@/redux/action/eventTypeActions";
import Pagination from "@mui/material/Pagination";
const Events = () => {

  const dispatch  = useDispatch();
  const eventState = useSelector((state) => state.eventReducer);
	const { events } = eventState;
  const currentPage = useSelector((state) => state.eventReducer.pagination.currentPage);
  const eventsPerPage = 4;

  const eventTypesState = useSelector((state) => state.eventTypeReducer);
	const { eventTypes } = eventTypesState;

  const handleChangePage = (event, value) => {
    dispatch(setCurrentPage(value)); 
  };

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(getAllEventTypes())
  }, [dispatch])


  const onSearch = (name) =>{
		dispatch(searchEvent(name))
    dispatch(setCurrentPage(1));
	}

  const handleFilterByEventType = (event) =>{
		dispatch(filterEventType(event.target.value))
    dispatch(setCurrentPage(1));
	}

  const handleFilterEventDate = (event) =>{
		dispatch(filterEventDate(event.target.value))
    dispatch(setCurrentPage(1));
	}

  const totalEvents = events.length;
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const displayedEvents = events.slice(startIndex, endIndex);

  return (
    <Container>
        <div className="lg:flex lg:items-center lg:justify-center lg:mb-8">
        <div className="lg:w-1/4 lg:pr-4 mb-3 lg:mb-0">
         <Filters 
            eventTypes={eventTypes} 
            handleFilterByEventType={handleFilterByEventType}
            handleFilterEventDate={handleFilterEventDate}
          />
        </div>
        <div className="lg:w-3/4 lg:pl-4">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">All Events</h1>
          <div className="flex items-center justify-center mb-4">
           <div className="max-w-lg w-full mb-4 lg:mb-0 lg:mr-4 mt-4 p-5">
              <SearchBar onSearch={onSearch}/>
            </div>
          </div>
          <div className="mt-9">
            <EventCards events={displayedEvents} />
          </div>
        </div>
      </div>
        <div  style={{  marginLeft: '700px'}}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          size="large"
          
        />
      </div>
    </Container>
  );
}

export default Events;

