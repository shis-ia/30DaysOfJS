
 //Q1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skillJSO = JSON.stringify(skills,undefined,4)
console.log(skillJSO)


//Q2
 let age = 250;
const ageStringify = JSON.stringify(age,undefined,4)
console.log(ageStringify)

//Q3
let isMarried = true
const isMarriedStringify = JSON.stringify(isMarried,undefined,4)
console.log(isMarriedStringify)

//Q4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const studentJSON = JSON.stringify(student,undefined,4)
console.log(studentJSON)







