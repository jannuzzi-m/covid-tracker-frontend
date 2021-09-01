import React, { useState } from "react"
import './Map.css'
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Brazil from "@svg-maps/brazil";
import { getAbbr } from '../../utils/utils'
import StateCaseInfo from '../StateCaseInfo/StateCaseInfo'
import StateAbbr from "../../types/StateAbbr";
import Case from "../../types/Case";

const Map = ({toggleMenu, lastCases}) => {

    const [showInfo, setShowInfo] = useState(false)
    const [state, setState] = useState <StateAbbr>({name: 'Santa Catarina', abbr: 'SC'});
    const [currentState, setCurrentState] = useState <Case | undefined>();
    
    const togleInfo = () => {
        setShowInfo(!showInfo)
    }
    const handleOnChange = (e) => {
        setShowInfo(true)
        const stateName = e.target.attributes.name.value
        setState({name:stateName, abbr:getAbbr(stateName)})
        setCurrentState(lastCases.find(c => c.state == state.abbr))
    }
    return (
        <div id="map-coponent-container">
            <div id="map-container" style={{ width: showInfo ? '70%' : '100%' }}>
                <SVGMap map={Brazil} className="map" onLocationClick={handleOnChange}/>
                { currentState ?
                <div id="state-info-container">
                    <div><div className="card-info-title">Nome</div><span>: {state.name}</span></div>
                    <div><div className="card-info-title">Populção</div><span>: {currentState.estimated_population.toLocaleString('pt-BR')}</span></div>
                    <div><div className="card-info-title">Total de casos</div><span>: {currentState.confirmed.toLocaleString('pt-BR')}</span></div>
                    <div><div className="card-info-title">Casos 100k habitantes</div><span>: {currentState.confirmed_per_100k_inhabitants.toLocaleString('pt-BR')}</span></div>
                </div>: null}
            <div onClick={togleInfo} style={{ top: 0, right: 0, position: 'absolute' }} className="toggle-button">Info</div>
            <div onClick={toggleMenu} style={{ top: 0, left: 0, position: 'absolute' }} className="toggle-button">Menu</div>
            </div>
            <div style={{ width: showInfo ? '30%' : 0 }} id="map-info-container">
                <StateCaseInfo uf={state}/>
            </div>
        </div>
    )
}

export default Map;