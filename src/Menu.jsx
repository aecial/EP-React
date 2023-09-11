import React, { useState } from "react";
import MenuBtn from "./components/MenuBtn";
import MenuItem from "./components/MenuItem";

const Menu = () => {
  const [list, setList] = useState(0);
  function handleClick(num) {
    setList(num);
  }
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
  let SEAFOOD = [
    {
      name: "Salmon",
      price: 285,
    },
    {
      name: "Hipon",
      price: 180,
    },
    {
      name: "Mixed",
      price: 180,
    },
  ];
  let prac = { name: "ror", price: 20 };
  const loopItik = ITIK.map((item, index) => {
    return <MenuItem item={item} key={index} />;
  });
  const loopPork = PORK.map((item, index) => {
    return <MenuItem item={item} key={index} />;
  });
  const loopSeafood = SEAFOOD.map((item, index) => {
    return <MenuItem item={item} key={index} />;
  });
  let itemNames = ["ITIK", "PORK", "SEAFOOD"];
  return (
    <div className="grid grid-flow-dense grid-cols-3 h-[100vh]">
      <div className="col  flex flex-col gap-5 justify-center items-center bg-black border-r-4 border-white text-lg md:text-2xl">
        {itemNames.map((item, index) => {
          return (
            <MenuBtn
              itemName={item}
              key={index}
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      <div className="col col-span-2">
        <div className="bg-black h-full text-white flex flex-col md:flex-row items-center justify-center p-5 gap-5 text-sm md:text-2xl">
          {list == 0 ? loopItik : list == 1 ? loopPork : loopSeafood}
        </div>
      </div>
    </div>
  );
};

export default Menu;
