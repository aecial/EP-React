import React from "react";

const ContactTitle = ({ title }) => {
  return (
    <div className=" bg-black text-white w-44 flex justify-center p-1 rounded-sm">
      <h4 className="text-2xl">{title}</h4>
    </div>
  );
};

export default ContactTitle;
