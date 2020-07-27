import React, { useState, useEffect } from "react";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import NewsPage from "./Components/NewsPage/NewsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewsContext from "./Context/NewsContext";
import "./App.css";

const apiKey = "0ef3a256fe244c768ab57b56f71a4952";

function App() {
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState([]);

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
    <Router>
      <div className="container App">
        <Header />
        <NewsContext.Provider value={{ news, setNews }}>
          <Switch>
            <Route exact path="/">
              <Table news={news} />
            </Route>
            <Route exact path="/page/:index" component={NewsPage} />
          </Switch>
        </NewsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
