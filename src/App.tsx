import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Map from './components/Map/Map';
import Charts from './components/Charts/Charts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const togleInfo = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div id="container">
      <Router>
        <div style={{ width: showMenu ? '20%' : 0 }} id="menu">
          <Menu />
        </div>
          <div onClick={togleInfo} id="togle-menu">Menu</div>
        <main style={{ width: showMenu ? '80%' : '100%' }} id="main">
          <Switch>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/charts">
              <Charts />
            </Route>
            <Redirect from='/' to='/map'></Redirect>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
