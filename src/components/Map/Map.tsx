import React, { useState } from "react"
import './Map.css'
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Brazil from "@svg-maps/brazil";

const Map = () => {

    const [showInfo, setShowInfo] = useState(false)

    const togleInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div id="map-coponent-container">
            <div id="map-container" style={{ width: showInfo ? '70%' : '100%' }}>
                <SVGMap map={Brazil} className="map" />
            </div>
            <div onClick={togleInfo} className="toggle-button">Info</div>
            <div style={{ width: showInfo ? '30%' : 0 }} id="map-info-container">
                <div className="map-info">
                    There will be info here!
                </div>
                <div className="map-info">
                    And here
                </div>
                <div className="map-info">
                    Here too!
                </div>
            </div>
        </div>
    )
}

export default Map;