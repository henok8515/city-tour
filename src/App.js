import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";

import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <div className="app">
      <Switch>
        <Router>
          <h1 className="title">Vist Ethiopia</h1>
          <Route exact path="/" component={Nav} />
          <Route exact path="/" component={CardList} />
        </Router>
      </Switch>{" "}
    </div>
  );
}

export default App;
