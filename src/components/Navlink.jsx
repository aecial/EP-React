import React from "react";

const Navlink = ({ name, onClick }) => {
  return (
    <a
      href={`#${name}`}
      onClick={onClick}
      className="nav-link hover:text-slate-400"
    >
      {name}
    </a>
  );
};

export default Navlink;
