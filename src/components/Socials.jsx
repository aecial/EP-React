import React from "react";

const Socials = ({ fbLink, igLink, tkLink }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 p-4 ">
        <a href={fbLink}>
          <i class="fa-brands fa-facebook-f"></i> Facebook
        </a>
        <a href={igLink}>
          <i class="fa-brands fa-instagram"></i> Instagram
        </a>
        <a href={tkLink}>
          <i class="fa-brands fa-tiktok"></i> Tiktok
        </a>
      </div>
    </>
  );
};

export default Socials;
