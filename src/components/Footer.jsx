import React from "react";

function Footer() {
  let Year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Vincent Yeh copyright ⓒ {Year}</p>
      </footer>
    </div>
  );
}
export default Footer;
