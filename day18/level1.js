

// //Q1 promise
const countriesAPI = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        for (country in countries) {
            let name = countries[country].name
            let capital = countries[country].capital
            let language = countries[country].languages
            let population = countries[country].population
            let area = countries[country].area
             console.log(`name:${name},capital:${capital},language:${language},population:${population},area:${area}`)
        }
        
    } catch (err) {
        console.error(err)
    }
}
 fetchData()


