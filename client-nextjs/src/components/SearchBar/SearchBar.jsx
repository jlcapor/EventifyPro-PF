'use client';
import Container from "../Container";
const SearchBar = ({}) => {
	return (
		<Container>
			<div className="grid place-items-center  border-white">
				<div className="flex  rounded bg-white border border-gray-300">
					<input
						type="search"
						className="w-full border-none bg-transparent px-4 py-1 focus:outline-none"
					/>
					<button className="m-1 rounded px-2 py-1 font-semibold text-white bg-gray-500 border border-gray-300">
						Search 
					</button>
				</div>
			</div>
		</Container>
	);
};


export default SearchBar;