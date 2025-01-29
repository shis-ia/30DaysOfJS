let student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    skills: ['HTML','JS','Python'],
    country: 'UK',
    enrolled: true
}

let studentStringfy = JSON.stringify(student,undefined,4)
localStorage.setItem('student',studentStringfy)
console.log(localStorage)