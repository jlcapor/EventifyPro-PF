const loadEvent = async(id) =>{
  const res = await fetch(`http://localhost:3001/events/${id}`);
  const data = await res.json();
  return data
}
const EventPage = async({params}) => {
  const detalEvent = await loadEvent(params.id);
  return (
    <section className='text-gray-700 body-font overflow-hidden '>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.trbimg.com/img-54a323b0/turbine/os-teatro-broadway-rey-leon-20141230"/>
        
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-600 tracking-widest'>EVENT NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalEvent.title}</h1>
            <p className="leading-relaxed">{detalEvent.description}</p>
            <div className="flex mt-6 pb-5 border-b-2 border-gray-200 mb-5 flex-col">
              <h2 className='text-sm title-font text-gray-950 tracking-widest'>PLACE</h2>
              <p className="mr-3 leading-relaxed">{detalEvent.place}</p>
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventPage;
