import React from "react";

const Footer = () => {
  return (
    <footer className="h-[15vh] bg-emerald-400 flex justify-center items-center">
      <div className="bg-teal-200 flex justify-evenly w-[100%]">
        <a href="#" className="">
          Order Now
        </a>
        <div className="bg-red-200 flex gap-10">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Tiktok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
