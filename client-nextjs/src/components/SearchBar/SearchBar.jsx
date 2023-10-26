import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [name, setName] = useState ('');

  const handleChange = (event) => {
		setName(event.target.value);
	};
  return (
    <div className="flex items-center justify-center">
      <div className="flex rounded bg-white border border-gray-300 w-full">
        <input
          type="search"
          onChange={handleChange}
          className="border-none bg-transparent px-4 py-1 focus:outline-none text-lg w-full"
          placeholder="search ..."
        />
        <button onClick={()=>{onSearch(name); setName('');}}  className="m-1 rounded px-2 py-1 font-semibold text-white bg-gray-500 border border-gray-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
