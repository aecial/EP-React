import React from "react";

const MenuEntry = ({ name, price }) => {
  return (
    <div className="w-48 bg-emerald-200 flex flex-col justify-center items-center">
      <img src="./src/assets/react.svg" className="w-24" />
      <p className="text-xl">{name}</p>
      <p className="text-xl font-bold">₱ {price}</p>
    </div>
  );
};

export default MenuEntry;
