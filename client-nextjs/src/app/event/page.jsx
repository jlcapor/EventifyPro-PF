import Container from "@/components/Container";
import EventCards from "@/components/EventCards/EventCards";
import SearchBar from "@/components/SearchBar/SearchBar";

async function fetchEvents(){
  const res = await fetch('http://localhost:3000/api/event');
  const data = await res.json();
  return data;
}
const Events = async() => {
  const events = await fetchEvents()
  return (
    <Container>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="relative mt-6 max-w-lg mx-auto">
            <SearchBar/>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-gray-600 text-2xl font-bold">All Events</h3>
        <EventCards events={events}/>
      </div>
    </Container>
  );
}

export default Events;
