import React from "react";
import logo from "./../assets/Img/blog-icon.svg";

function NavBar() {
  return (
    <div
      className="flex justify-between items-center p-6 
    bg-gradient-to-br from-purple-600 to-blue-500 text-white "
    >
      <img src={logo} className="w-[70px]" />
      <h2 className="font-sansbold text-l font-bold text-center">
        THE BLOG PAGE
      </h2>
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">Home</li>
      </ul>
    </div>
  );
}

export default NavBar;
