import React from "react";
import Socials from "./Socials";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section className="h-[50vh]">
      <div className="w-[100%] h-full flex justify-center items-center md:text-2xl text-lg bg-white gap-20">
        <ContactCard
          icon={<i className="fa-solid fa-phone"></i>}
          title={"Phone"}
          content={"09982409945"}
          cta={"tel:09982409945"}
          ctaText={"Call Now"}
        />
        <ContactCard
          icon={<i className="fa-solid fa-map-location"></i>}
          title={"Location"}
          content={"Capas, Tarlac"}
          cta={"https://goo.gl/maps/U31AVPNhziW1wRFv6"}
          ctaText={"Get Directions"}
        />
      </div>
    </section>
  );
};

export default Contact;
