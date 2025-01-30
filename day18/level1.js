//Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }

//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }

//   doSomething(callback)


//   const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
//   }

//   doSomething((err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   })



// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))



// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.includes('Node')) {
//         resolve('fullstack developer')
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))
// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => console.error(error))


// const fetchData = async () => {
//     try {
//         const response = await fetch(url)
//         const countries = await response.json()
//         console.log(countries)
//     } catch (err) {
//         console.error(err)
//     }
// }
// console.log('===== async and await')
// fetchData()



//Q1
const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(error => console.error(error))


const fetchData = async () => {
try {
    const response = await fetch (countriesAPI)
    const countries = await response.json()
    console.log(countries)
} catch (err) {
    console.error(err)
}
}
fetchData()

