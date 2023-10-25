import Link from 'next/link';
import React from 'react';

const EventCard = ({event}) => {
	return (
		<div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
			<Link href={`/event/${event.id}`}>
				<img className="h-56 lg:h-60 w-full object-cover" src={event.image} alt={event.title}/>
			</Link>
			<div className="p-3">
				<span className="text-sm text-primary text-center">{event.date}</span>
				<h1 className="text-gray-950 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">{event.title}</h1>
			</div>
		</div>
	);
};

export default EventCard;