// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made']

//Q1
// const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const parttern = /\b\d{4,}\b/g
// const match = txt.match(parttern)
// console.log(match)
// let [num1,num2,num3] = match
// // console.log(num1,num2,num3)
// let intNum1 = parseInt(num1)
// let intNum2 = parseInt(num2)
// let intNum3 = parseInt(num3)
// let sum = intNum1 + intNum2 + intNum3
// console.log(sum)





// //Q2
const text = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
const parttern = /-?\d/g
const match = text.match(parttern)
console.log(match)


let [num1, num2, num3, num4, num5, num6, num7, num8] = match
let intNum1 = parseInt(num1)
let intNum2 = parseInt(num2)
let intNum3 = parseInt(num3)
let intNum4 = parseInt(num4)
let intNum5 = parseInt(num5)
let intNum6 = parseInt(num6)
let intNum7 = parseInt(num7)
let intNum8 = parseInt(num8)

// console.log([intNum1, intNum2, intNum3, intNum4, intNum5, intNum6, intNum7, intNum8])
 let intParttern = [intNum1, intNum2, intNum3, intNum4, intNum5, intNum6, intNum7, intNum8]
let sortArray = intParttern.sort()
console.log(sortArray)

let sum = intNum8 - intNum3
console.log(sum)
//Q3














