import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Lalibela() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Lalibela" />
          <h1> Welciome </h1>
        </Switch>
      </Router>
    </div>
  );
}

export default Lalibela;
