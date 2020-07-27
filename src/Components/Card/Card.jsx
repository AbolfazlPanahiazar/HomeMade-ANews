import React from "react";
import "./Card.scss";

function Card({ news }) {
  const { author, description, source, title, urlToImage } = news;

  return (
    <div className="col-12 col-md-6 col-xl-4 Card">
      <div className="Card__wrapper">
        <img className="Card__image" src={urlToImage} alt="news image" />
        <h3 className="Card__title">{title}</h3>
        <p className="Card__description">{description}</p>
        <em className="Card__author">
          by <u>{author}</u> from <u>{source.name}</u>
        </em>
      </div>
    </div>
  );
}

export default Card;
