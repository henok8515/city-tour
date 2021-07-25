import "./App.css";

import CardList from "./components/CardList/CardList";

import Nav from "./components/NavBar/Nav";

function App() {
  return (
    <div className="app">
      <h1 className="title">Vist Ethiopia</h1>
      <Nav />
      <CardList />
    </div>
  );
}

export default App;
