
 /*//Q1
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
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

let time = (`${date}/0${month}/${year} ${hours}:${minutes}`)
return time

}
console.log(showDateTime())

     //Q5
   function swapValues(x,y) {
    const numbers = [x,y]
   let reverse= numbers.reverse();
    return reverse
   } 

console.log(swapValues(8,10))


//Q 6
function reverseArray(arry){
  let reverse = arry.reverse();
   return reverse

  }

console.log(reverseArray([1,2,3,4,5]))


  //Q7
 
const capitalizeArray = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const cities = ['Nairobi','Kisumu','Mombasa','Nakuru']
console.log(capitalizeArray(cities))

//Q8
function addItem(array){
  array.push('milk')
  return array
}
console.log(addItem(['bread','sugar','soap']))

//Q9
function removeItem(array){
   array.pop()
   return array
}
console.log(removeItem(['maize','rice','bread','beans']))


//Q10
function sumOfNumbers(array) {
  sum = 0
  for (let i = 0;i<array.length;i++){
    sum = sum + array[i]
  }
  return sum
}
console.log(sumOfNumbers([1,2,3,4]))*/

//Q11

//let numbers = [1,2,3,4,5,6,7,8,9]
/*function sumOfEven(array){
  let sum = 0
  for (let i =0;i< array.length;i++){
    //sum = sum + array[i]
    if (i % 2 > 0)  {
      sum = sum + array[i]
      return sum
    }
  }
}
console.log(sumOfEven([1,2,3,4,5,6,7,8,9]))*/



//Q14

function sumOfNum(array){
  sum = 0
  for (let i = 0;i<array.length;i++)
  sum = sum + array[i]
  return sum
}
console.log(sumOfNum([1,2,3,9,8]))



//Q15

let characters = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,9,'#','$','@']
function randomUserIp(){
  for (let i = 0;i < 6;i++){
  let random = parseInt(Math.random() * characters.length())
  return random
    
  }
  
}

console.log(randomUserIp())
