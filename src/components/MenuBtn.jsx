import React from "react";

const MenuBtn = ({ itemName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white border-white border-2 w-24 md:w-32  h-10 rounded-xl"
    >
      {itemName}
    </button>
  );
};

export default MenuBtn;
