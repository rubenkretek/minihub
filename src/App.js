import React from "react";
import "./styles/app.scss";
// Import pages
import MiniOwners from "./pages/MiniOwners";
import Nav from './components/Nav';
import Guides from './pages/Guides';
import Specialists from './pages/Specialists';
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <MiniOwners />
        </Route>

        <Route path="/guides">
          <Guides />
        </Route>
        <Route path="specialists">
          <Specialists />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
