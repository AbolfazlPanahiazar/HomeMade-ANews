import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import ReplacerImage from "../../assets/images/replacer.png";

function Card({ news, index }) {
  const { author, description, source, title, urlToImage } = news;

  const route = title.replace(/\s/g, "-");

  return (
    <div className="col-12 col-md-6 col-xl-4 Card">
      <Link style={{ color: "#000" }} to={`/page/${index}`}>
        <div className="Card__wrapper">
          <img className="Card__image" src={urlToImage || ReplacerImage} alt="news image" />
          <h3 className="Card__title">{title}</h3>
          <p className="Card__description">{description}</p>
          <em className="Card__author">
            by <u>{author}</u> from <u>{source.name}</u>
          </em>
        </div>
      </Link>
    </div>
  );
}

export default Card;
