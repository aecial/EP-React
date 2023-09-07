import React from "react";
import MenuHeader from "./MenuHeader";
import ContactTitle from "./ContactTitle";

const Contact = () => {
  return (
    <section>
      <MenuHeader text={"Contact Us"} />

      <div className="w-[40%] grid grid-cols-3 mx-auto bg-teal-900">
        <ContactTitle title={"Phone Number"} />
        <ContactTitle title={"Location"} />
        <ContactTitle title={"Socials"} />
      </div>
    </section>
  );
};

export default Contact;
