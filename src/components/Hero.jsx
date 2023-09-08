import React from "react";

const Hero = ({ imgSrc, heroText }) => {
  return (
    <div className="hero-height gap-4 bg-slate-100 flex justify-center p-4 items-center flex-col">
      <img src={imgSrc} className="w-[100%] md:w-[30%]" />
      <h1 className="text-4xl md:text-5xl">{heroText}</h1>
    </div>
  );
};

export default Hero;
