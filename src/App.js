import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import { Data } from "./Data/Data";
import Nav from "./components/NavBar/Nav";

import Places from "./pages/Places";
import About from "./pages/About";
import Register from "./pages/Register/Register";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then(console.log);
  }
  onEmailChange = () => {
    this.setState(console.log(this.state.name));
  };
  render() {
    return (
      <div>
        <Router>
          <h1 className="title">Vist Ethiopia</h1>
          <Nav />
          <Switch>
            <Route exact path="/">
              {/*change to  cardlist  */}
              <CardList Data={Data} />
            </Route>

            <Route exact path="/card/:title">
              <Places Data={Data} />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Register">
              <Register
                name={this.state.name}
                onEmailChange={this.onEmailChange}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
