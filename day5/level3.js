const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortArray = ages.sort()
console.log('Sort:',sortArray)
let minAge=sortArray[0]
console.log('minAge:',minAge)
let maxAge=sortArray[9]
console.log('maxAge:',maxAge)

let median = (sortArray[5] + sortArray[6]) / 2
console.log('median:',median)

let range = (maxAge - minAge)
console.log('range:',range)