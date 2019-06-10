import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Restaurants from "./components/Restaurants";
import MenuList from "./components/MenuList";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/menuList" component={MenuList} />
      <Route path="/menu" component={Menu} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
