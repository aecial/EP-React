import React from "react";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";
import PageHeader from "./PageHeader";

const Menu = () => {
  return (
    <section id="Menu" className="h-[100vh] bg-neutral-800 text-white">
      <div className="flex flex-col gap-10 uppercase">
        <PageHeader header={"Menu"} />
        <MenuHeader text="Itik" />
        <MenuItems />
        <MenuHeader text="Pork" />
        <MenuItems />
      </div>
    </section>
  );
};

export default Menu;
