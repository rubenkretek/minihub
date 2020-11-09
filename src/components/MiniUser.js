import React from "react";
import imageLeft from "../img/front.png";
import imageRight from "../img/rear.png";
import data from "../ownersData";

const MiniUser = () => {
  return (
    <div className="mini-user">
      <div className="mini-user__images">
        <div className="mini-user__image">
          <img src={imageLeft} />
        </div>
        <div className="mini-user__image">
          <img src={imageRight} />
        </div>
      </div>
      <div className="mini-user__details">
        <h2>Ruben Kretek</h2>
        <p>
          <span>West Sussex</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          auctor arcu sit amet justo consectetur tempor. Nunc est urna, dapibus
          ut urna ut, scelerisque ultrices felis. Nunc et quam eget ante egestas
          mattis. Sed gravida eros id ante rhoncus, vitae vestibulum arcu
          mollis. Fusce interdum dui non rhoncus tincidunt.{" "}
        </p>
        <a
          className="button"
          href="https://www.instagram.com/rubenkretek/"
          target="_blank"
        >
          Follow
        </a>
      </div>
    </div>
  );
};

export default MiniUser;
