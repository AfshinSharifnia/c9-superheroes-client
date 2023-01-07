import React from "react";

const Footer = () => {
  const today = new Date();

  return (
    <div>
      <footer> {today.toDateString()}</footer>
    </div>
  );
};

export default Footer;
