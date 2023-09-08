import React from "react";

const ContactSocials = ({ fbLink, igLink, tiktokLink }) => {
  return (
    <div className="flex flex-col ">
      <a href={fbLink}>
        <i class="fa-brands fa-facebook"></i> Facebook
      </a>
      <a href={igLink}>
        <i class="fa-brands fa-instagram"></i> Instagram
      </a>
      <a href={tiktokLink}>
        <i class="fa-brands fa-tiktok"> </i>Tiktok
      </a>
    </div>
  );
};

export default ContactSocials;
