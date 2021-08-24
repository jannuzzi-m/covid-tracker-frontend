import React, { useState } from "react"
import './Map.css'
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Brazil from "@svg-maps/brazil";
import { getAbbr } from '../../utils/utils'
import StateCaseInfo from '../StateCaseInfo/StateCaseInfo'
import StateAbbr from "../../types/StateAbbr";

const Map = () => {

    const [showInfo, setShowInfo] = useState(false)
    const [state, setState] = useState <StateAbbr>({
        name: '',
        abbr: ''
    });

    const togleInfo = () => {
        setShowInfo(!showInfo)
    }
    const handleOnChange = (e) => {
        setShowInfo(true)
        const stateName = e.target.attributes.name.value
        setState({name:stateName, abbr:getAbbr(stateName)})
    }

    return (
        <div id="map-coponent-container">
            <div id="map-container" style={{ width: showInfo ? '70%' : '100%' }}>
                <SVGMap map={Brazil} className="map" onLocationClick={handleOnChange}/>
            </div>
            <div onClick={togleInfo} className="toggle-button">Info</div>
            <div style={{ width: showInfo ? '30%' : 0 }} id="map-info-container">
                <StateCaseInfo state={state}/>
            </div>
        </div>
    )
}

export default Map;