import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ value, handleChange }) => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            onChange={handleChange}
            value={value}
            id="search"
            name="search"
            className="input_basic pl-10 pr-3 leading-5"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
