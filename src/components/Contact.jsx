import React from "react";
import MenuHeader from "./MenuHeader";
import ContactTitle from "./ContactTitle";
import ContactBody from "./ContactBody";
import ContactEntry from "./ContactEntry";
import ContactSocials from "./ContactSocials";
import PageHeader from "./PageHeader";

const Contact = () => {
  return (
    <section id="Contact Us" className="h-[100vh]">
      <PageHeader header={"Contact Us"} />

      <div className="flex justify-center items-center h-[100%]">
        <div className="w-[40%] flex gap-4 flex-wrap md:flex-nowrap text-4xl">
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
      </div>
    </section>
  );
};

export default Contact;
