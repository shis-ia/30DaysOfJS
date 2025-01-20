


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
let colorArray = 'rgb('

function arrayOfrgbColor() {
    for (let i = 0; i < 3; i++) {
        let random = parseInt(Math.random() * 200);
        if (i < 2) {
            colorArray = colorArray + random + ','
        } else {
            colorArray = colorArray + random + ')'
        }
    }
    return colorArray
}
console.log(arrayOfrgbColor())