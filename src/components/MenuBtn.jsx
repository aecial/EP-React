import React from "react";

const MenuBtn = ({ itemName }) => {
  return (
    <button className="bg-black text-white border-white border-2 w-16 md:w-32  h-10 rounded-xl">
      {itemName}
    </button>
  );
};

export default MenuBtn;
