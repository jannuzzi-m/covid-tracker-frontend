import React, { useState } from "react"
import './Charts.css'
import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    helpers, DropShadow, Gradient
} from 'rumble-charts';

const Charts = () => {
    const data = [{
        name: 'lalala',
        data: [5, 2, 10]
    },
    {
        name: 'lalala',
        data: [9, 5, 20]
    },{
        name: 'lalala',
        data: [14, 2, 14]
    },];
    const [showInfo, setShowInfo] = useState(true)

    const togleInfo = () => {
        setShowInfo(!showInfo)
    }
    return (
        <div id="charts-component-container">
          
            <div id="chart-container" style={{ width: showInfo ? '70%' : '100%' }}>
                <Chart width={600} height={250} series={data} minY={0} maxY={30}>
                    <Bars innerPadding={5} groupPadding={10} />
                </Chart>
            </div>

            <div onClick={togleInfo} className="toggle-button">Search   </div>
            <div style={{ width: showInfo ? '30%' : 0 }} id="search-container">
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

export default Charts;