import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import { Data } from "./Data/Data";
import Nav from "./components/NavBar/Nav";

import Places from "./pages/Places";

function App() {
  return (
    <div className="app">
      <h1 className="title">Vist Ethiopia</h1>

      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <CardList Data={Data} />
          </Route>

          <Route exact path="/card/:title">
            <Places Data={Data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
