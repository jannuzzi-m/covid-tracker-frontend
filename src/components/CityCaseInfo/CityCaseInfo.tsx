import React from 'react';
import { useState } from 'react';
import './CityCaseInfo.css';
import { getCitySearch } from '../../ApiUtils';
import Case from '../../types/Case';
const CityCaseInfo = ({ currentCity, cityName, setCityName, submit }) => {
    const [searching, setSearching] = useState<boolean>(true);
    const [searchResults, setSearchResults] = useState<Case[]>([])
    
    const submitForm = (city: string, state: string) => {
        setSearching(false)
        submit(city, state)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        getCitySearch(cityName)
        .then(response => {
            response.json().then(json => {
                console.log(json)
                setSearchResults(json.results);
                setSearching(true)
            })
        })
    }
    return (
        <div id="city-case-indo-container">
            <div id="search-container">
                <form id="city-info-form" onSubmit={handleSearch}>
                    <input value={cityName} onChange={e => setCityName(e.target.value)} type="text" placeholder="Ex: Chapecó" spellCheck={false} />
                    <button type="submit" id="form">Lupa</button>
                </form>
            </div>
            {searching?
            <div id="search-results-container">
                {
                    searchResults.map((result: Case) => {
                        return (
                            <div className="search-result-item" onClick={() => submitForm(result.city, result.state)}>
                                {result.city}
                            </div>
                        )
                    })
                }
            </div>:
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
}
        </div>
    )
}

export default CityCaseInfo;