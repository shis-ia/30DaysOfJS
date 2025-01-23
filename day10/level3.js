//Q1
/*// const countryies = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const distruchtuered = [
  ['Finland', 'Helsinki', 120000, 'Finnish'], ['Estonia', 'Tallin', 13000, 'Estonian'], ['Sweden', 'Stokhoml', 11000, 'Swedish'], ['Denmark', 'Copenhagen', 14000, 'Danish'],
  ['Norway', 'Oslo', 10000, 'Norwegian']
]
let [name, city, population, language] = distruchtuered
console.log(name, city, population, language)





//Q2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [names, [...skills], [score1, score2, jsScore, reactScore]] = student
console.log(names, skills, jsScore, reactScore)*/





//Q3
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
let arrayToObject1 = Object.assign({}, ['David' ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]])
let arrayToObject2 = Object.assign({}, ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]])
console.log({arrayToObject1},{arrayToObject2})


//Q4
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const copiedStudent ={...student}
console.log(copiedStudent)