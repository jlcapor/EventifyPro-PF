import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar/SearchBar";

const EventPage = () => {
  return (
 
     <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="relative mt-6 max-w-lg mx-auto">
          <SearchBar/>
        </div>
      </div>
       
    </div>
   
  );
}

export default EventPage;
