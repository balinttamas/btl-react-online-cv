import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ imageSource, title, text }) => (
  <div className="card text-center animate__animated animate__fadeInUp maincard">
    <div className="overflow">
      <img src={imageSource} alt="a wallpaper" className="card-img-top" />
    </div>
    <div className="card-body text-light">

      <h4 className="card-title">{title}</h4>

      <p className="card-text text-secondary">
        {text}
      </p>
      
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;