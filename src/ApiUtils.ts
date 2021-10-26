const API_PATH = 'http://localhost:8000/api'

export const getStateLastYear = async (state: string):Promise<any> => {
    return await fetch(`${API_PATH}/state/${state}/last_year/`)
}

export const getStateLastMonth = async (state: string):Promise<any> => {
    return await fetch(`${API_PATH}/state/${state}/last_month/`)
}

export const getCityLastYear = async (city: string, state:string):Promise<any> => {
    return await fetch(`${API_PATH}/city/${city}/${state}/last_year/`)
}

export const getCityLastMonth = async (city: string, state:string):Promise<any> => {
    return await fetch(`${API_PATH}/city/${city}/${state}/last_month/`)
}

export const getStatesLatest = async ():Promise<any> => {
    return await fetch(`${API_PATH}/latest/state/`)
}

export const getCitySearch = async (city):Promise<any> => {
    return await fetch(`${API_PATH}/city/?search=${city}`)
}

