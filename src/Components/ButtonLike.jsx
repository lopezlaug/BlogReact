import React from "react";
import { useState } from "react";

function ButtonLike() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
          dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex"
      >
        {count} likes
      </button>
    </>
  );
}

export default ButtonLike;
