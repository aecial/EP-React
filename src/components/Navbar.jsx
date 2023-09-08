import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  let links = ["Home", "Menu", "Contact Us"];
  function linkClick() {
    let navBtn = document.getElementById("nav-btn");
    let hamburger = document.getElementById("hamburger");
    let x = document.getElementById("x");
    let mobileNav = document.getElementById("mobile-nav");
    x.hidden = true;
    hamburger.hidden = false;
    mobileNav.classList.add("hidden");
  }
  function handleClick() {
    let navBtn = document.getElementById("nav-btn");
    let hamburger = document.getElementById("hamburger");
    let x = document.getElementById("x");
    let mobileNav = document.getElementById("mobile-nav");
    if (x.hidden == true) {
      mobileNav.classList.remove("hidden");
      hamburger.hidden = true;
      x.hidden = false;
    } else {
      x.hidden = true;
      hamburger.hidden = false;
      mobileNav.classList.add("hidden");
    }
  }
  return (
    <nav className="flex items-center justify-between px-4 py-6 bg-black text-white h-[88px]">
      <a href="/" className="text-xl md:text-4xl flex items-center uppercase">
        <img
          src="./src/assets/epLogoClear.png"
          alt="logo"
          className=" h-20   "
        />
        Eatik Point
      </a>
      <button id="nav-btn" onClick={handleClick}>
        <i id="hamburger" className="fa-solid fa-bars text-4xl md:hidden"></i>
        <i id="x" className="fa-solid fa-xmark text-5xl" hidden></i>
      </button>
      <div className="hidden md:flex gap-6 text-xl">
        {links.map((link) => {
          return <Navlink key={link} name={link} />;
        })}
      </div>
      <div
        id="mobile-nav"
        className="bg-black flex flex-col justify-center gap-5 items-center text-2xl h-[30%] w-full absolute left-0 top-20 z-0 border-b-2 border-x-2 border-white hidden"
      >
        {links.map((link) => {
          return <Navlink key={link} name={link} onClick={linkClick} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
