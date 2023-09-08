import React from "react";
import MenuEntry from "./MenuEntry";

const MenuItems = () => {
  return (
    <div className="flex h-44 items-center justify-center p-5 gap-5">
      <MenuEntry name={"Fried Itik"} price={285} />
      <MenuEntry name={"Crispy Pata"} price={285} />
      <MenuEntry name={"Dinakdakan"} price={285} />
    </div>
  );
};

export default MenuItems;
