import React, { useState, useEffect } from "react";

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
    <div>
      Table
      {console.log(news)}
    </div>
  );
}

export default Table;
