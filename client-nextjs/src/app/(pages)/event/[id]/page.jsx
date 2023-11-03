import EventDetailClient from "./EventDetailClient";
const loadEvent = async(id) =>{
  const res = await fetch(`http://localhost:3001/events/${id}`);
  const data = await res.json();
  return data
}
export default async function EventPage ({params}){
  const detailEvent = await loadEvent(params.id);
  
  return (
      <EventDetailClient detailEvent={detailEvent}/>
  );
}

