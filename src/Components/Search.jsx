import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function Search() {
  return (
    <>
      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center">
        <IoSearchSharp className="text-[20px] text-gray-400" />
        <input
          type="text"
          placeholder="Type to search ..."
          className="outline-none ml-2"
        />
      </div>
    </>
  );
}

export default Search;
