import React from "react";
import MenuHeader from "./MenuHeader";
import ContactTitle from "./ContactTitle";
import ContactBody from "./ContactBody";
import ContactEntry from "./ContactEntry";
import ContactSocials from "./ContactSocials";

const Contact = () => {
  return (
    <section className="h-[100vh]">
      <MenuHeader text={"Contact Us"} />

      <div className="w-[40%] grid grid-cols-3 gap-5 mx-auto">
        <ContactEntry title={"Phone Number"} content={"09982409945"} />
        <ContactEntry title={"Location"} content={"Capas, Tarlac"} />
        <ContactEntry
          title={"Socials"}
          content={
            <ContactSocials
              fbLink={"https://www.facebook.com/TeddyPascual1223/"}
              igLink={"https://www.instagram.com/ch1nachi/"}
              tiktokLink={"https://www.tiktok.com/@aecial_?lang=en"}
            />
          }
        />
      </div>
    </section>
  );
};

export default Contact;
