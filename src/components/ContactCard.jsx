import React from "react";

const ContactCard = ({ icon, title, content, cta, ctaText }) => {
  return (
    <div className="bg-white min-h-74 min-w-74 text-black shadow-lg rounded-lg shadow-black p-5 md:text-3xl flex flex-col justify-center items-center gap-8">
      <h1>
        {icon} {title}
      </h1>
      <h1>{content}</h1>
      <a
        href={cta}
        className="border-black border-2 shadow-lg hover:bg-black hover:text-white shadow-black p-4 rounded-md"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default ContactCard;
