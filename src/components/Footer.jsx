import React from "react";
import PageHeader from "./PageHeader";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="h-[42vh] bg-black text-white text-4xl flex flex-col items-center">
      <PageHeader header={"Follow Us"} color={"white"} />
      <div className="h-full flex items-center">
        <Socials
          fbLink={"https://web.facebook.com/eatikpoint/?_rdc=1&_rdr"}
          igLink={"https://web.facebook.com/eatikpoint/?_rdc=1&_rdr"}
          tkLink={"https://www.tiktok.com/@aecial_?lang=en"}
        />
      </div>
    </footer>
  );
};

export default Footer;
