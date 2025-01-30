
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      for(cat in cats){
        let catName = cats[cat].name
        console.log(`Name: ${catName}`)
      }
   
    } catch (err) {
      console.error(err)
    }
  }
  
  fetchData()

  