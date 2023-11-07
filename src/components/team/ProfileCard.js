import React from "react";
import "./ProfileCard.css";
import personImage from './person-image.png';

function ProfileCard({ name, title, linkedin, gmail, img }) {
  return (
    <div className="card">
      <div className="lines"></div>
      <div className="imgBx">
        <img src={personImage} alt="personimage" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {name}<br />
            <span>{title}</span>
          </h2>
          <div className="social-icons">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
