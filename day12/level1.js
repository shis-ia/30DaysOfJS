
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
const text = 'The position of some particles on the horizontal x-axis -12, -4, -6 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
let parttern = /-?\d/g
let match = text.match(parttern)
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

let sortedArray = intParttern.sort(function (a, b) { return a - b })
console.log(sortedArray)

let defrence = sortedArray[7] - sortedArray[0]
console.log(defrence)


//Q3

function validString(string) {
    let txt = string
    let parttern = /^[a-zA-Z]_?[A-Za-z0-9]/g
    let result = parttern.test(string)

    return result
}

console.log(validString('1Firstname'))










