import React from 'react';
import './CityCaseInfo.css';
const CityCaseInfo = () => {
    const submitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div id="city-case-indo-container">
            <div id="search-container">
                <form id="city-info-form" onSubmit={submitForm}>
                    <input type="text" placeholder="Ex: Chapecó" spellCheck={false}/>
                    <button type="submit" id="form">Lupa</button>
                </form>
            </div>
            <div id="city-info-container">
            <div className="city-info">
                    População: 235.938
                </div>
                <div className="city-info">
                    Casos: 62.932
                </div>
                <div className="city-info">
                    Mortes: 523
                </div>
                <div className="city-info">
                    Taxa de mortalidade: 0.97%
                </div>
                
            </div>
        </div>
    )
}

export default CityCaseInfo;