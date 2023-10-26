import Container from "@/components/Container";
import EventCards from "@/components/EventCards/EventCards";
import Filters from "@/components/Filters/Filters";
import SearchBar from "@/components/SearchBar/SearchBar";

 const fetchEvents = async()=>{
  const res = await fetch('http://localhost:3000/api/event');
  const data = await res.json();
  return data;
}
const Events = async() => {
  const events = await fetchEvents()
  return (
    <Container>
        <div className="lg:flex lg:items-center lg:justify-center lg:mb-8">
        <div className="lg:w-1/4 lg:pr-4 mb-3 lg:mb-0">
          <Filters
           
          />
        </div>
        <div className="lg:w-3/4 lg:pl-4">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">All Events</h1>
          <div className="flex items-center justify-center mb-4">
           <div className="max-w-lg w-full mb-4 lg:mb-0 lg:mr-4 mt-4 p-5">
              <SearchBar />
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

