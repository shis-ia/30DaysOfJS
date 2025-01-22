

  /*//Q1
  foreach itrates an array element  
  map it iterates an array element and modify array elements 
  filter filters out item which full fills the filtering condition  */

  /*//Q2
  callback function is a function that can be used as a parameter to other fanction. */
  
  
  //const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
  
  /*//Q3
  countries.forEach(country => console.log(country))



const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

//Q4
names.forEach(names => console.log(names))


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Q5
numbers.forEach(numbers => console.log(numbers))

//Q6
const countriesMap = countries.map((country) => country.toUpperCase())
console.log(countriesMap)

//Q7
//Filter countries containing land

const countreiesLength = countries.map((country) => country.length)
console.log(countreiesLength)

//Q8
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquare = numbers.map((number) => number * number)
console.log(numbersSquare)

//Q9
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesUpperCase = names.map((name)=> name.toUpperCase())
console.log(namesUpperCase)*/

//Q10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

//   const mapProductToPrice = products.map(products)


 /*//Q11
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
  const countriesWithLand = countries.filter((country) => country.includes('land'))
  console.log(countriesWithLand)

//Q12
const countriesWithSixCharacters = countries.filter((country) => country.length == 6)
console.log(countriesWithSixCharacters)

//Q13
const countriesWithMoreThanSixCharacters = countries.filter((country) => country.length > 6)
console.log(countriesWithMoreThanSixCharacters)

//Q14
const countriesStartWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartWithE)*/

/*//Q15
const priceWithValue = products.filter((amount) => amount.price.length > 1)
console.log(priceWithValue)*/


//Q20
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const somelength = names.some((name) => name.length > 7)
console.log(somelength)

/*//Q21
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const allCountriesContainLand = countries.every((country) => country.includes('land'))
console.log(allCountriesContainLand)

//Q22
find returns the first element that meet the condition 
findindex return the index of the first element that meets the condition*/


//Q24
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const indexOfFirstCountryWithSixLetters = countries.findIndex((country) => country.length == 6)
console.log(indexOfFirstCountryWithSixLetters)

//Q23
const countryWithSixLetters = countries.find((country) => country.length == 6)
console.log(countryWithSixLetters)

//Q25
const positionOfNorway = countries.findIndex((country) => country == 'Norway')
console.log(positionOfNorway)

//Q26
const positionOfRussia = countries.findIndex((country) => country == 'Russia')
console.log(positionOfRussia)