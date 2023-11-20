import React from "react";
import starIcon from "../Resources/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <p className="card-status">{props.status}</p>
      <img className="card-image" src={`Resources/${props.img}`} alt="" />
      <div className="card-data">
        <div className="card-stats">
          <img className="star-icon" src={starIcon} alt="" />
          <p className="card-rating">{props.rating}</p>
          <p className="card-review-count">
            ({props.reviewCount}).{props.country}
          </p>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-cost-per-person">
          <b>From ${props.price}</b> / person
        </p>
      </div>
    </div>
  );
}
