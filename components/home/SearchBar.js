import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="mx-6 my-2 rounded-lg border-b border-gray-200 bg-[#50586c] px-6 py-4">
      <div className="flex items-center space-x-3">
        <MagnifyingGlassIcon className="h-7 w-7 text-[#DCE2F0]" />
        <input
          className=" flex-1 rounded-lg bg-[#DCE2F0] p-3 text-[#50586c] placeholder-[#8b8a8a] outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
