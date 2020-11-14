import React from "react";


const MiniUser = ({ owners }) => {
  return (
    <div className="mini-user">
      <div className="mini-user__images">
        <div className="mini-user__image">
          <img src={owners.imageLeft} alt="Mini" />
        </div>
        <div className="mini-user__image">
          <img src={owners.imageRight} alt="Mini" />
        </div>
      </div>
      <div className="mini-user__details">
        <h2>{owners.Name}</h2>
        <p>
          <span>{owners.location}</span>
        </p>
        <p>{owners.description}</p>
        <a
          className="button"
          href={owners.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          Follow
        </a>
      </div>
    </div>
  );
};

export default MiniUser;
