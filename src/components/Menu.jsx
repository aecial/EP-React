import React from "react";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <section className="h-[100vh] bg-neutral-800 text-white">
      <div className="flex flex-col gap-10">
        <h3 className="text-5xl text-center">Menu</h3>
        <MenuHeader text="Fried Itik" />
        <MenuItems />
        <MenuHeader text="Crispy Pata" />
        <MenuItems />
      </div>
    </section>
  );
};

export default Menu;
