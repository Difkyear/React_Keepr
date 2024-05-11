import React from "react";

function Footer() {
  let Year = new Date().getFullYear();
  return (
    <footer>
      <p>Vincent Yeh copyright ⓒ {Year}</p>
    </footer>
  );
}
export default Footer;
