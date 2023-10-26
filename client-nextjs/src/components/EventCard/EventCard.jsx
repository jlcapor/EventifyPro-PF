import Link from 'next/link';
import React from 'react';

const EventCard = ({event}) => {
	return (
		<div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
			<Link href={`/event/${event.id}`}>
				<img className="h-56 lg:h-60 w-full object-cover" src={event.image} alt={event.title}/>
			</Link>
			<div className="px-3 py-4 text-center">
				<h3 className="text-2sm text-gray-950">
					Basic Level
				</h3>
			</div>
			<div className="p-3 ">
				<span className="text-lg text-primary text-center ">{event.date}</span>
				<h2 className="text-gray-950 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{event.title}</h2>
			</div>
		</div>
	);
};

export default EventCard;