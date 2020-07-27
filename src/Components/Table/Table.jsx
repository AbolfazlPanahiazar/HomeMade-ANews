import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Table.scss";
import NewsContext from "../../Context/NewsContext";

function Table() {
  const { news, setNews } = useContext(NewsContext);

  return (
    <div className="row Table">
      {news.map((item, index) => (
        <Card key={index} news={item} index={index} />
      ))}
    </div>
  );
}

export default Table;
