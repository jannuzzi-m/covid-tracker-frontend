import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Map from './components/Map/Map';
import Charts from './components/Charts/Charts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Brazil from "@svg-maps/brazil";

const App = () => {
  return (
    <div id="container">
      <Router>
        <div id="menu">
          <Menu />
        </div>
        <main id="main">
          <Switch>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
