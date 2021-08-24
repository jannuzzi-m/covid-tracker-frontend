type Case = {
    id: number,
    report_date: Date
    state?: string
    city?: string
    place_type: string
    confirmed: number
    deaths: number
    order_for_place: number
    is_last: boolean
    estimated_population_2019: number
    estimated_population: number
    city_ibge_code: number
    confirmed_per_100k_inhabitants: number
    death_rate: number
}

export default Case