import React from "react";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";
import PageHeader from "./PageHeader";

const Menu = () => {
  return (
    <section className="h-[100vh] bg-neutral-800 text-white">
      <div className="flex flex-col gap-10">
        <PageHeader header={"Menu"} />
        <MenuHeader text="Fried Itik" />
        <MenuItems />
        <MenuHeader text="Crispy Pata" />
        <MenuItems />
      </div>
    </section>
  );
};

export default Menu;
