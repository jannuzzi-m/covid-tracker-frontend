import React from 'react';
import { useState } from 'react';
import './CityCaseInfo.css';
import { getCitySearch } from '../../ApiUtils';
import Case from '../../types/Case';
import Loading from '../Loading/Loading';
const CityCaseInfo = ({ currentCity, cityName, setCityName, submit, loading, setLoading }) => {
    const [searching, setSearching] = useState<boolean>(true);
    const [searchResults, setSearchResults] = useState<Case[]>([])

    const submitForm = (city: string, state: string) => {
        setCityName(`${city} - ${state}`)
        setSearching(false)
        submit(city, state)
    }
    const handleSearch = (e) => {
        setLoading(true)
        e.preventDefault()
        getCitySearch(cityName)
            .then(response => {
                response.json().then(json => {
                    console.log(json)
                    setSearchResults(json.results);
                    setSearching(true)
                    setLoading(false)
                })
            })
    }
    return (
        <div id="city-case-indo-container">
            <div id="search-container">
                <form id="city-info-form" onSubmit={handleSearch}>
                    <input value={cityName} onChange={e => setCityName(e.target.value)}
                        type="text"
                        placeholder="Ex: Chapecó"
                        spellCheck={false} />
                    <button type="submit" id="form">Lupa</button>
                </form>
            </div>
            {!loading ?
                <div style={{ width: '100%' }}>
                    {searching ?
                        <div id="search-results-container">
                            {
                                searchResults.map((result: Case) => {
                                    return (
                                        <div key={result.id} className="search-result-item"
                                            onClick={() => submitForm(result.city, result.state)}>
                                            {`${result.city} - ${result.state}`}
                                        </div>
                                    )
                                })
                            }
                        </div> :
                        <div id="city-info-container">
                            {

                                currentCity ? <>
                                    <div style={{ fontWeight: 'bolder', fontSize: '1.3em', display: 'flex', textAlign: 'center', marginBottom: '10px' }}>
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
                </div> : <div style={{ paddingTop: '20px',width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}><Loading /></div>}
        </div>
    )
}

export default CityCaseInfo;