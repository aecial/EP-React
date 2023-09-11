import React from "react";
import PageHeader from "./PageHeader";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="h-[42vh] bg-black text-white text-4xl flex flex-col items-center">
      <PageHeader header={"Follow Us"} color={"white"} />
      <div className="h-full flex items-center">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
