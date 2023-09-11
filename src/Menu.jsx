import React, { useState } from "react";
import MenuBtn from "./components/MenuBtn";
import MenuItem from "./components/MenuItem";

const Menu = () => {
  let ITIK = [
    {
      name: "Fried Itik",
      price: 285,
    },
    {
      name: "Itik Dinakdakan",
      price: 180,
    },
    {
      name: "Sisig Itik",
      price: 180,
    },
  ];
  let PORK = [
    {
      name: "Crispy Pata",
      price: 285,
    },
    {
      name: "Dinakdakan",
      price: 180,
    },
    {
      name: "Sisig",
      price: 180,
    },
  ];
  let prac = { name: "ror", price: 20 };
  let itemNames = ["ITIK", "PORK", "SEAFOOD"];
  return (
    <div className="grid grid-cols-3 h-[100vh]">
      <div className="col  flex flex-col gap-5 justify-center items-center bg-black text-lg md:text-2xl">
        {itemNames.map((item, index) => {
          return <MenuBtn itemName={item} key={index} />;
        })}
      </div>
      <div className="col col-span-2">
        <div className="bg-slate-950 h-full text-white flex items-center justify-center p-5 gap-5">
          {ITIK.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
