import React from "react";

const Hero = ({ imgSrc, heroText }) => {
  return (
    <div className="hero-height gap-4 bg-slate-100 flex justify-center items-center">
      <img src={imgSrc} className="w-[30%]" />
      <h1 className="text-5xl">{heroText}</h1>
    </div>
  );
};

export default Hero;
