import React from "react";

const MenuEntry = ({ name, price }) => {
  return (
    <div className="w-48 hover:shadow-slate-50 hover:shadow-md bg-slate-50 text-black uppercase flex flex-col justify-center items-center p-4 rounded-xl ">
      <img src="./src/assets/bird.png" className="w-44 h-32 object-cover" />
      <p className="text-xl">{name}</p>
      <p className="text-xl font-bold">₱ {price}</p>
    </div>
  );
};

export default MenuEntry;
