import React from "react";
import ContactTitle from "./ContactTitle";
import ContactBody from "./ContactBody";

const ContactEntry = ({ title, content }) => {
  return (
    <div className="bg-white w-full flex flex-col items-center p-10 gap-5 border-gray-600 border-2 ">
      <ContactTitle title={title} />
      <ContactBody content={content} />
    </div>
  );
};

export default ContactEntry;
