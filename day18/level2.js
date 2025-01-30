
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        for (cat in cats) {
            let name = cats[cat].name
             console.log(`name:${name}`)
        }
        
    } catch (err) {
        console.error(err)
    }
}
 fetchData()

