'use client';
import EventCard from "../EventCard/EventCard";
const EventCards = ({events}) => {
	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
			<EventCard/>
			<EventCard/>
			<EventCard/>
			<EventCard/>
			<EventCard/>
			<EventCard/>
			<EventCard/>
			<EventCard/>
		</div>
	);
};

export default EventCards;