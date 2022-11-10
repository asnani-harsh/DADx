import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FaSearchPlus className="w-5 h-5 ml-4" />
        <input 
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-slate-300 border-none outline-none placeholder-gray-500 h-3 m-1 max-w-md rounded-md text-white p-4"
        />
      </div>
    </form>
);
};

export default Searchbar;
