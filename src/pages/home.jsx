import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Movie from "../components/Movie";
import Slid from "../components/slid";
import Categories from "./categories";

function Home() {
  return (
    <div className="home-page">
      <Router>
        <Switch>
          <Route exact path="/" component={Slid} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
