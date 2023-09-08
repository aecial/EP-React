import React from "react";

const Navlink = ({ name, onClick }) => {
  return (
    <a
      href={`#${name}`}
      onClick={onClick}
      className="nav-link hover:text-slate-400 text-2xl"
    >
      {name}
    </a>
  );
};

export default Navlink;
