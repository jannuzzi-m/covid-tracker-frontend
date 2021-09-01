import React, { useEffect } from 'react';
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
import { getStatesLatest } from './ApiUtils'
import Case from './types/Case';
const App = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [lastCases, setLastCases] = useState<Case[]>([])
  useEffect(() => {
    getStatesLatest().then(response => {
      response.json().then(json => {
        setLastCases(json)
      })
    })
  }, [])
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div id="container">
      <Router>
        <div style={{ width: showMenu ? '20%' : 0 }} id="menu">
          <Menu />
        </div>
        <main style={{ width: showMenu ? '80%' : '100%' }} id="main">
          <Switch>
            <Route path="/map">
              <Map toggleMenu={toggleMenu} lastCases={lastCases}/>
            </Route>
            <Route path="/charts">
              <Charts toggleMenu={toggleMenu} />
            </Route>
            <Redirect from='/' to='/map'></Redirect>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
