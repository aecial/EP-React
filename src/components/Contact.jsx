import React from "react";
import MenuHeader from "./MenuHeader";
import ContactTitle from "./ContactTitle";

const Contact = () => {
  return (
    <section>
      <MenuHeader text={"Contact Us"} />

      <div className="w-[100%] flex bg-teal-900 gap-20">
        <ContactTitle title={"Phone Number"} />
        <ContactTitle title={"Location"} />
        <ContactTitle title={"Socials"} />
      </div>
    </section>
  );
};

export default Contact;
