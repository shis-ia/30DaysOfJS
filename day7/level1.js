
//Q1
/*function fullName(){
    let firstName = 'Charity'
    let secondName = 'Shisia'
    let space = " "
    let fullName = firstName + space + secondName
    console.log(fullName)
}
fullName()*/


//Q2
/*function fullName(firstName, lastName) {
    let space = " "
    let fullName = firstName + space + lastName
    return fullName
}
console.log(fullName('Mary', 'Jane'))

//Q3

function addTwoNum(num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(addTwoNum(4, 2))

//Q4
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(5, 10))

//Q5
function perimeterOfRectangle(width, length) {
    let perimeter = 2 * (width + length)
    return perimeter
}
console.log(perimeterOfRectangle(4, 2))

//Q6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}

console.log(volumeOfRectPrism(4, 4, 2))

//Q7
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(4))

//Q8
function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(6))

//Q9
function density(mass, volume) {
    let dens = mass / volume
    return dens
}
console.log(density(16, 4))

//Q10
function speed(distance, time) {
    let spd = distance / time
    return spd
}
console.log(speed(120, 2))

//Q11
const weightOfObject = (mass, gravity) => {
    let weight = mass * gravity;
    return weight;
}
console.log(weightOfObject(4, 5))

//Q12
function CelsiusToFahrenheit(degreeCelsius) {
    let celsiustofahrenheit = (degreeCelsius * 9 / 5) + 32;
    return celsiustofahrenheit
}
console.log(CelsiusToFahrenheit(70))

//Q13
function bodyMassIndex(weight, height) {
    let bmi = weight / (height * height)
    console.log(bmi)
    if (bmi <= 18.5) {
        console.log('under weight')
    } else if (bmi <= 24.9) {
        console.log('normal weight')
    } else if (bmi <= 29.9) {
        console.log('over weight')
    } else {
        console.log('obese')
    }
}

bodyMassIndex(280, 8)*/

//Q14
function checkSeason(month){
switch (month) {
    case 'January':
        console.log('Summer')
        break
    case 'February':
        console.log('Summer')
        break
    case 'March':
        console.log('Summer')
        break
    case 'April':
        console.log('Autum')
        break
    case 'May':
        console.log('Autum')
        break
    case 'June':
        console.log('Autum')
        break
    case 'July':
        console.log('Winter')
        break
    case 'Agust':
        console.log('Winter')
        break
    case 'September':
        console.log('Winter')
        break
    case 'October':
        console.log('Spring')
        break
    case 'November':
        console.log('Spring')
    default:
        console.log('Spring')
    }
}
checkSeason('January')