import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Table.scss";

const apiKey = "0ef3a256fe244c768ab57b56f71a4952";

function Table() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");

  //ComponentDidMount
  useEffect(() => {
    const req = new Request(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
    fetch(req)
      .then((response) => response.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row Table">
      {news.map((item, index) => (
        <Card key={index} news={item} />
      ))}
    </div>
  );
}

export default Table;
