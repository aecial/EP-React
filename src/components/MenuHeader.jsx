import React from "react";

const MenuHeader = ({ text }) => {
  return (
    <h4 className="text-3xl text-center self-center rounded-lg font-bold bg-slate-50 text-black w-56">
      {text}
    </h4>
  );
};

export default MenuHeader;
