import React from "react";
import ContactSocials from "./ContactSocials";
const Footer = () => {
  return (
    <footer className="h-[15vh] bg-black text-white flex justify-center items-center">
      <div className=" flex justify-evenly w-[100%]">
        <a href="#" className="">
          Order Now
        </a>
        <ContactSocials
          fbLink={"https://www.facebook.com/TeddyPascual1223/"}
          igLink={"https://www.instagram.com/ch1nachi/"}
          tiktokLink={"https://www.tiktok.com/@aecial_?lang=en"}
        />
      </div>
    </footer>
  );
};

export default Footer;
