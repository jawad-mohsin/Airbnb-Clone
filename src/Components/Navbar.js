import React from "react";
import airbnbLogo from "../Resources/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="airbnb-logo" src={airbnbLogo} alt="" />
    </nav>
  );
}
