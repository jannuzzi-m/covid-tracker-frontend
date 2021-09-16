import React, { useState } from "react"
import './Charts.css'
import CaseInfo from "../StateCaseInfo/StateCaseInfo";
import CityCaseInfo from '../CityCaseInfo/CityCaseInfo'
import LastMonthChart from '../LastMonthChart/LastMonthChart'
import { getCityLastMonth } from '../../ApiUtils'
import { useEffect } from "react";
const Charts = ({ toggleMenu }) => {
    const city = "city"
    const [showInfo, setShowInfo] = useState(true)
    const [data, setData] = useState([])
    const [currentCity, setCurrentCity] = useState()
    const [cityName, setCityName] = useState('')
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getData()
    }, [])

    const toggleInfo = () => {
        setShowInfo(!showInfo)
    }
    const submitForm = (city, state) => {
        getData(city, state)
    }
    const getData = (city = 'Chapecó', state = "SC") => {
        setLoading(true);
        getCityLastMonth(city, state).then(response => {
            response.json().then((json) => {
                setCurrentCity(json[0])
                setData(json.map(c => {
                    console.log(c)
                    return {
                        date: c.report_date,
                        confirmados: c.confirmed,
                    }
                }))
                setLoading(false)

            }
            )
        })
    }

    return (
        <div id="charts-component-container">

            <div id="chart-container" style={{ width: showInfo ? '70%' : '100%' }}>

                {data.length ? <LastMonthChart data={data} /> : null}

                <div onClick={toggleInfo} style={{ top: 0, right: 0, position: 'absolute' }} className="toggle-button">Search</div>
                <div onClick={toggleMenu} style={{ top: 0, left: 0, position: 'absolute' }} className="toggle-button">Menu</div>

            </div>

            <div style={{ width: showInfo ? '30%' : 0 }} id="search-container">
                <CityCaseInfo currentCity={currentCity} cityName={cityName} setCityName={setCityName} submit={submitForm} loading={loading} setLoading={setLoading} />
            </div>





        </div>
    )
}

export default Charts;