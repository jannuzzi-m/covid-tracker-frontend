import React, { useEffect } from 'react';
import { useState } from 'react';
import Case from '../../types/Case';
import StateAbbr from "../../types/StateAbbr";
import './StateCaseInfo.css'
import data from './CaseStateMock'
import {getStateLastYear, getStateLastMonth} from '../../ApiUtils'

enum SEARCH_MODE {
    LAST_YEAR,
    LAST_MONTH
}

const CaseInfo = ({ uf }) => {
    const [cases, setCases] = useState<Case[]>([])
    const [searchType, setSearchType] = useState<SEARCH_MODE>(SEARCH_MODE.LAST_YEAR)
    useEffect(() => {
        getData(uf.abbr, searchType)
    }, [uf, searchType])
    const toogleSearchType = (mode: SEARCH_MODE) => {
        if(searchType == mode) return
        setSearchType(mode)
    }
    const getData = (state: string, searchMode: SEARCH_MODE) => {
        if(searchMode == SEARCH_MODE.LAST_MONTH){
            getStateLastMonth(state).then(res =>{
                res.json().then(json => {
                    setCases(json)
                })
            })
        }
        else if(searchMode == SEARCH_MODE.LAST_YEAR){
            getStateLastYear(state).then(res =>{
                res.json().then(json => {
                    setCases(json)
                })
            })
        }
    }
    return (
        <div id="case-info-container">

            <div id="title-info-container">
                {uf.name?uf.name: "Escolha um estado"}
            </div>
            <div id="mode-type">
                {searchType == SEARCH_MODE.LAST_MONTH? 'Último mês': 'Último ano'}
            </div>
            <div id="toggle-year-month-container">
                <button style={{
                    backgroundColor: searchType == SEARCH_MODE.LAST_MONTH? 'rgba(0,0,0,.5)':'rgba(0,0,0,.2)'
                    }}className="toggle-year-month-button" onClick={() => toogleSearchType(SEARCH_MODE.LAST_MONTH)}>
                    Ultimo mes
                </button>
                <button style={{
                    backgroundColor: searchType == SEARCH_MODE.LAST_YEAR? 'rgba(0,0,0,.5)':'rgba(0,0,0,.2)'
                    }} className="toggle-year-month-button" onClick={() => toogleSearchType(SEARCH_MODE.LAST_YEAR)}>
                    Último ano
                </button>
            </div>
            
            {
                cases.map(c => {
                    return (
                        <div className="case-info" key={c.id}>
                            <div className="info-container-header">
                                {c.report_date.toString().split('-').reverse().join('/')}
                            </div>
                            <div className="info-container-body">
                                <div className='info-data'>
                                    Casos: {c.confirmed.toLocaleString('pt-BR')}
                                </div>
                                <div className='info-data'>
                                    Mortes: {c.deaths.toLocaleString('pt-BR')}
                                </div>
                                <div className='info-data'>
                                    Mortalidade: {c.death_rate.toLocaleString('pt-BR')}
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default CaseInfo