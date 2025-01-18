
 //Q1
function solveLinEquation(a,b,c,x,y){
    let equation = (a*x) + (b*y) + c;
    return equation
}

console.log(solveLinEquation(4,4,6,4,8))

//Q2
function QuadEquation(a,x,b,c){
    let quadEqua = (a*x*2) + (b*x) + c;
    return quadEqua
}
console.log(QuadEquation(4,2,6,8))

//Q4

function showDateTime(){
    let day = '05';
    let month = '02';
    let year = 2024;
    let slash = '/';
    let hour = '04';
    let dot = ':';
    let sec = '08';
    let space = " "
let date = day+ slash +month + slash +year + space +hour + dot + sec;
    return date

}
console.log(showDateTime())

  //Q7
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const cities = ['Nairobi','Kisumu','Mombasa','Nakuru']
console.log(changeToUpperCase(cities))

//Q8

function addItem(arr) {
    const newArr = []
    for (const element of arr){
        newArr.push(element.unshift())
    }
    return newArr
}
 const towns = ['Nairobi','Kisumu','Mombasa','Nakuru']
 console.log(addItem(towns.push('Eldoret')))
