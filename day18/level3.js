const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        for (cat in cats) {
            let weight = cats[cat].weight
            // let avarageWeight =weight
            // console.log(avarageWeight)
            console.log(weight)
        }
        // console.log(cats)
    } catch (err) {
        console.error(err)
    }
}
 fetchData()


