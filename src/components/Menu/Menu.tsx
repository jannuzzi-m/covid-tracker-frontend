import React from "react"
import './Menu.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Map from "../Map/Map";
import Charts from "../Charts/Charts";
const Menu = () => {
    return (
        <div className="menu-container">
            <div id="logo-container">
                <img id="logo" src="logo.png" alt="" />
            </div>
            <div id="menu-container">
                <Link to='/map' className="menu-item">
                    Mapa
                </Link>
                <Link to='/charts' className="menu-item">
                    Gráficos
                </Link>
            </div>
        </div>
    )
}
export default Menu;