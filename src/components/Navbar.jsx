import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  let links = ["Home", "About", "Contact"];
  return (
    <nav className="flex items-center justify-between px-4 py-6 bg-slate-900 text-white">
      <a href="/" className="text-4xl">
        Eatik Point
      </a>
      <div className="flex gap-6 text-xl">
        {links.map((link) => {
          return <Navlink name={link} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
