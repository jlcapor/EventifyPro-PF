import React from 'react';

const EventCard = ({event}) => {
	return (
		<div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
			<img className="h-56 lg:h-60 w-full object-cover" src={event.image} alt="T-Shirt"/>
			<div className="p-4 text-gray-800">
			<h1 className="text-gray-950 font-bold text-xl mb-3 hover:text-gray-900 hover:cursor-pointer">Rock en parque</h1>
			</div>
		</div>
	);
};

export default EventCard;