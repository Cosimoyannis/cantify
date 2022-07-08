import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import MensaSelectionPage from "../pages/mensaSelectionPage";
import DateSelectionPage from "../pages/dateSelectionPage";
import Map from "../pages/map";
import welcomePage from "../pages/welcomePage";



/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/mensaSelectionPage" component={MensaSelectionPage} />
    <Route path="/dateSelectionPage" component={DateSelectionPage} />
    <Route path="/map" component={Map} />
    <Route path="/welcomePage" component={welcomePage} />
  </Switch>
);
