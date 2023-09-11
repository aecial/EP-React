import React from "react";

const PageHeader = ({ header, color, bg }) => {
  return (
    <h3
      id={`${header}`}
      style={{ color: `${color}`, backgroundColor: `${bg}` }}
      className="text-5xl text-center"
    >
      {header}
    </h3>
  );
};

export default PageHeader;
