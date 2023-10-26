'use client';
const Filters = () => {
  return (
    <div className="bg-gray-50 p-4">
      <p className="text-lg font-semibold mb-2">Filters</p>
      <div className="mb-4">
        <label className="block mb-1">Category:</label>
        <select
          className="border p-2 w-full"
        >
          <option value="">All Categories</option>
            <option>
              
            </option>
        </select>
      </div>


      <div className="mb-4">
        <label className="block mb-1">Date:</label>
        <input
          type="date"
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
}

export default Filters;
