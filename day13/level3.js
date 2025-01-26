const students =[
    ['Jane','Kenya'],
    ['Bwire','Uganda'],
    ['Yohana','Tanzania'],
    ['Machar','Sudan'],
    ['Basan','Ethiopia']
]
 //Qa
console.time('regular for loop')
for(let i= 0; i < students.length;i++){
   console.log(students[i][0],students[i][1])
}

console.timeEnd('regular for loop')


//Qb

console.time('for of loop')
for( const [student,country] of students){
    console.log(student,country)
}
console.timeEnd('for of loop')


//Qc

console.time('forEach loop')
students.forEach(([student,countries]) => {
console.log(student,countries)
})

console.timeEnd('forEach loop')

// //Qd
// console.time('while')
// let result = ""
// while(students[i]){
// result += students[i]
// }
// console.timeEnd('while')