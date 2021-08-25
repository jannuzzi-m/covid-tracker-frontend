import React, { useEffect } from 'react';
import { useState } from 'react';
import Case from '../../types/Case';
import StateAbbr from "../../types/StateAbbr";
import './StateCaseInfo.css'
import data from './CaseStateMock'


const CaseInfo = ({ state }) => {
    const [cases, setCases] = useState<Case[]>([])
    useEffect(() => {
        setCases(data)
    })
    return (
        <div id="case-info-container">

            <div id="title-info-container">
                {state.name?state.name: "Escolha um estado"}
            </div>

            {
                cases.map(c => {
                    return (
                        <div className="case-info" key={c.id}>
                            <div className="info-container-header">
                                {c.report_date.toDateString()}
                            </div>
                            <div className="info-container-body">
                                <div className='info-data'>
                                    Casos: {c.confirmed}
                                </div>
                                <div className='info-data'>
                                    Mortes: {c.deaths}
                                </div>
                                <div className='info-data'>
                                    Mortalidade: {c.death_rate}
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