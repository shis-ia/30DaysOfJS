


//Q2
/*let color = 'rgb('

function rgbColorGenerator() {
    for (let i = 0; i < 3; i++) {
        let random = parseInt(Math.random() * 200);
        if (i < 2) {
            color = color + random + ','
        } else {
            color = color + random + ')'
        }
    }
    return color
}
console.log(rgbColorGenerator())

//Q3
let hexaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let hexaLetter = ['F', 'G', 'H', 'J']
let answer = ['#']
function arrayOfHexaColor() {
for (let i = 0; i < 6; i++) {
    if (i < 2) {
        let random = parseInt(Math.random() * hexaLetter.length)
        answer += hexaLetter[random]
    } else {
        let random = parseInt(Math.random() * hexaNum.length)
        answer += hexaNum[random]
    }
   
}
 return answer
} 
console.log(arrayOfHexaColor())*/

//Q4
function arrayOfrgbColor() {
    result = []
    for (let j = 0; j < 3; j++) {
        let colorArray = 'rgb('
        for (let i = 0; i < 3; i++) {
            let random = parseInt(Math.random() * 200);
            if (i < 2) {
                colorArray = colorArray + random + ','
            } else {
                colorArray = colorArray + random + ')'
            }

        }
        result.push(colorArray)
    }
    // result = result + colorArray
    return result
}
console.log(arrayOfrgbColor())

//Q8
function shuffle(array){ 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = parseInt(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}

console.log(shuffle([1, 2, 3, 4, 5]));


//Q10
function isEmpty(array){
    let empty = array.length
if (empty < 1){
    console.log('empty')
} else{
    console.log('not empty')
}
return empty
}

console.log(isEmpty([1,2,3]))

//Q11
function sum(a,b){
let addedSum = a + b;
return addedSum
}

console.log(sum(12,23))

//Q14
let result =""
function modifyArray(array){
let modify = array[4].toUpperCase()
array[4] = modify
if (array.length > 5){
console.log(array)
} else {
    console.log('item not found')
}
 return result
}
console.log(modifyArray(['John','Den','Jack','Mary','Jane','Mark']))