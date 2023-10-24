'use client';
import { BiSearch } from 'react-icons/bi';
const Search = () => {
	return ( 
		<div className="flex flex-row items-center justify-between">
			<div onClick={()=>{alert('uuuuuuuu°')}} className="p-2 bg-slate-600 rounded-full text-white">
				<BiSearch size={18} />
			</div>
		</div>
	  );
	}
	 
export default Search;