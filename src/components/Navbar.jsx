import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  let links = ["Home", "Menu", "Contact Us"];
  return (
    <nav className="flex items-center justify-between px-4 py-6 bg-black text-white h-[88px]">
      <a href="/" className="text-4xl flex items-center">
        <img
          src="./src/assets/epLogoClear.png"
          alt="logo"
          className=" h-20  "
        />
        Eatik Point
      </a>
      <div className="flex gap-6 text-xl">
        {links.map((link) => {
          return <Navlink key={link} name={link} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
