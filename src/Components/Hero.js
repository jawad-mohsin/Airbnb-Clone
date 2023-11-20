import React from "react";
import multiplePics from "../Resources/multipics.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="multiple-pics" src={multiplePics} alt="" />
      <h1 className="heading">Online Experiences</h1>
      <p className="content">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
