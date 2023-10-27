'use client';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "@/components/Container";
import EventCards from "@/components/EventCards/EventCards";
import Filters from "@/components/Filters/Filters";
import SearchBar from "@/components/SearchBar/SearchBar";
import { fetchEvents, searchEvent, filterEventType, filterEventDate } from "@/redux/action/eventActions";
import { getAllEventTypes } from "@/redux/action/eventTypeActions";
const Events = () => {

  const dispatch  = useDispatch();
  const eventState = useSelector((state) => state.eventReducer);
	const { events } = eventState;

  const eventTypesState = useSelector((state) => state.eventTypeReducer);
	const { eventTypes } = eventTypesState;

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(getAllEventTypes())
  }, [dispatch])


  const onSearch = (name) =>{
		dispatch(searchEvent(name))
	}

  const handleFilterByEventType = (event) =>{
		dispatch(filterEventType(event.target.value))
	}

  const handleFilterEventDate = (event) =>{
		dispatch(filterEventDate(event.target.value))
	}

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
            <EventCards events={events} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Events;

