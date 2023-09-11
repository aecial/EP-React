import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="w-36 h-14 bg-white border-teal-200 border-4 text-black flex flex-col items-center justify-center">
      <h1>{item.name}</h1>
      <h3>
        Price:
        {item.price}
      </h3>
    </div>
  );
};

export default MenuItem;
