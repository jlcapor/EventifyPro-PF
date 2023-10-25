import React from 'react';

const EventCard = ({event}) => {
	return (
		<div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
			<img className="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt"/>
			
		</div>
	);
};

export default EventCard;