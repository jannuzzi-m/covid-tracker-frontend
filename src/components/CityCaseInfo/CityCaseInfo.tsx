import React from 'react';
import { useState } from 'react';
import './CityCaseInfo.css';
const CityCaseInfo = ({ currentCity, cityName, setCityName, submit }) => {
    
    const submitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div id="city-case-indo-container">
            <div id="search-container">
                <form id="city-info-form" onSubmit={submitForm}>
                    <input value={cityName} onChange={e => setCityName(e.target.value)} type="text" placeholder="Ex: Chapecó" spellCheck={false} />
                    <button onClick={submit} type="submit" id="form">Lupa</button>
                </form>
            </div>
            <div id="city-info-container">
                {

                    currentCity ? <>
                        <div style={{fontWeight: 'bolder', fontSize: '1.3em', display: 'flex', textAlign: 'center', marginBottom: '10px'}}>
                            {`${currentCity.city} - ${currentCity.state}`}
                        </div>
                        <div className="city-info">
                            População: {currentCity.estimated_population.toLocaleString('pt-BR')}
                        </div>
                        <div className="city-info">
                            Casos: {currentCity.confirmed.toLocaleString('pt-BR')}
                        </div>
                        <div className="city-info">
                            Mortes: {currentCity.deaths.toLocaleString('pt-BR')}
                        </div>
                        <div className="city-info">
                            Taxa de mortalidade: {currentCity.death_rate.toLocaleString('pt-BR')}
                        </div></> : null
                }

            </div>
        </div>
    )
}

export default CityCaseInfo;