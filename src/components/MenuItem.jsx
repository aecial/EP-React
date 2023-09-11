import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="md:w-56 w-32 md:h-44 p-4 bg-white border-teal-200 border-4 text-black flex flex-col items-center justify-center">
      <img src="./src/assets/bird.png" className="object-fit-cover" />
      <h1>{item.name}</h1>
      <h3>
        Price:
        {item.price}
      </h3>
    </div>
  );
};

export default MenuItem;
