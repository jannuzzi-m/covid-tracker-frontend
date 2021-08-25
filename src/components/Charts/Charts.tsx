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
import CaseInfo from "../StateCaseInfo/StateCaseInfo";
import CityCaseInfo from '../CityCaseInfo/CityCaseInfo'

const Charts = ({toggleMenu}) => {
    const city = "city"
    const data = [{
        name: 'lalala',
        data: [5, 2, 10]
    },
    {
        name: 'lalala',
        data: [9, 5, 20]
    }, {
        name: 'lalala',
        data: [14, 2, 14]
    },];
    const [showInfo, setShowInfo] = useState(true)

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }
    return (
        <div id="charts-component-container">

            <div id="chart-container" style={{ width: showInfo ? '70%' : '100%' }}>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 1</h3>
                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <Bars innerPadding={5} groupPadding={10} />
                    </Chart>

                </div>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 2</h3>
                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <Dots />
                        <Lines />
                    </Chart>

                </div>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 3</h3>

                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <Dots />
                    </Chart>

                </div>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 4</h3>

                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <Lines />
                    </Chart>

                </div>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 5</h3>

                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <RadialLines innerPadding={5} groupPadding={10} />
                    </Chart>

                </div>
                <div className="chart">
                    <h3 className="chart-title">Gráfico 6</h3>

                    <Chart width={200} height={250} series={data} minY={0} maxY={30}>
                        <Pies />
                    </Chart>

                </div>
                <div onClick={toggleInfo} style={{ top: 0, right: 0, position: 'absolute' }} className="toggle-button">Search</div>
                <div onClick={toggleMenu} style={{ top: 0, left: 0, position: 'absolute' }} className="toggle-button">Menu</div>

            </div>

            <div style={{ width: showInfo ? '30%' : 0 }} id="search-container">
                <CityCaseInfo />
            </div>





        </div>
    )
}

export default Charts;