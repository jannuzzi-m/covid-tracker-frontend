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
        <div id="container">
            <SVGMap map={Brazil} className="map" />
            <div onClick={togleInfo} id="togle-info">Info</div>
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