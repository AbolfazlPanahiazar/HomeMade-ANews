import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NewsPage.scss";
import NewsContext from "../../Context/NewsContext";
import RepalcerImage from "../../assets/images/replacer.png";

function NewsPage() {
  // const { author, content, description, publishedAt, source, title, url, urlToImage } = news;
  const { index } = useParams();

  const { news, setNews } = useContext(NewsContext);

  const [thisNew, setThisNew] = useState({
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: { name: "" },
    title: "",
    url: "",
    urlToImage: "",
  });

  useEffect(() => {
    const theNews = news[index];
    if (!theNews) {
    }
    console.log(theNews);
    setThisNew(theNews);
  }, []);

  return (
    <div className="NewsPage">
      <h2>{thisNew.title}</h2>
      <a href={thisNew.url} target="_blank">
        <img src={thisNew.urlToImage || RepalcerImage} alt="news image" />
      </a>
      <p>{thisNew.description}</p>
      <p>{thisNew.content}</p>
      <em>
        By <u>{thisNew.author}</u> from <u>{thisNew.source.name}</u>
      </em>
      <em>
        Published at <u>{thisNew.publishedAt}</u>
      </em>
      <Link to="/">
        <button>return to Home</button>
      </Link>
    </div>
  );
}

export default NewsPage;
