import React from "react";

const Socials = ({ fbLink, igLink, tkLink }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 p-4  ">
        <a href={fbLink} className="hover:text-blue-700">
          <i class="fa-brands fa-facebook-f"></i> Facebook
        </a>
        <a href={igLink} className=" hover:text-pink-400 ">
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
        <a
          href={tkLink}
          className=" hover:drop-shadow-[0_3px_2px_rgba(255,0,80,1)] "
        >
          <i class="fa-brands fa-tiktok"></i> Tiktok
        </a>
      </div>
    </>
  );
};

export default Socials;
