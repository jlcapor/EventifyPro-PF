'use client';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "@/components/Container";
import EventCards from "@/components/EventCards/EventCards";
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

  const eventTypesOptions = eventTypes.map((eventType) => (
		<option key={eventType.id} value={eventType.name}>{eventType.name}</option>
	))

  return (
    <Container>
        <div className="py-8">
            <div className="p-4">
                <h2 className="text-3xl font-bold text-center  text-gray-800 leading-tight">All Events</h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col justify-center">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative max-w-sm mt-2 sm:mt-0 sm:ml-2">
                      <select onChange={handleFilterByEventType} className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                      <option value="">Choose EventTypes</option>
                        {eventTypesOptions}
                      </select>
                    </div>
                    <div className="relative max-w-sm mt-2 sm:mt-0 sm:ml-2">
                     <input type="date" onChange={handleFilterEventDate} className="border p-2.5 w-full  block pl-10 py-3  dark:border-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"/>
                    </div>
                </div>
                <div className="relative max-w-sm mt-2 sm:mt-0 sm:ml-2">
                  <SearchBar onSearch={onSearch}/>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                  <EventCards events={events} />
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Events;

