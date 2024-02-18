import React from "react";
import logo from "./../assets/Img/blog-icon.svg";

function NavBar() {
  return (
    <div className="flex justify-between items-center p-10 bg-orange-400">
      <img src={logo} className="w-[80px]" />
      <h2>THE BLOG PAGE</h2>
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">Home</li>
      </ul>
    </div>
  );
}

export default NavBar;