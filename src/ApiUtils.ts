const API_PATH = 'http://asadeporco.southcentralus.cloudapp.azure.com/api'

export const getStateLastYear = async (state: string):Promise<any> => {
    return await fetch(`${API_PATH}/state/${state}/last_year/`)
}

export const getStateLastMonth = async (state: string):Promise<any> => {
    return await fetch(`${API_PATH}/state/${state}/last_month/`)
}

export const getCityLastYear = async (city: string):Promise<any> => {
    return await fetch(`${API_PATH}/city/${city}/last_year/`)
}

export const getCityLastMonth = async (city: string):Promise<any> => {
    return await fetch(`${API_PATH}/city/${city}/last_month/`)
}

