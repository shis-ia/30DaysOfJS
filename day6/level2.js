//Q1

/*let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9]
let result = ""
let randNum = parseInt(Math.random()*10)
for (let i = 0; i<randNum ;i++){
  let randIndex = parseInt(Math.random(1) * characters.length);
result = result + characters[randIndex]
}
console.log(result)*/

//Q2
/*let randomCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$']

let hexadecimal = " "

for (let i = 0; i < 7; i++) {
  let randomIndex = parseInt(Math.random() * randomCharacter.length);
  hexadecimal = hexadecimal + randomCharacter[randomIndex];
} console.log(hexadecimal)*/

/*//Q3

let answer = "rgb("
for (let i = 0; i < 3; i++) {
  randomIndex = (parseInt(Math.random() * 100));
  if (i < 2){
 answer = answer + randomIndex + ',' ;
  } else {
    answer = answer + randomIndex + ')'
  }

} 
console.log(answer)*/

       
  
  const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
     // Q4
let result = '["'
for (let i = 0;i < 11;i++){
 let upper = countries[i].toUpperCase();
 if (i< 10){
 result = result + upper + '" ,"'
 } else{
  result = result + upper + '"]'
 }
} 
console.log(result)







    //Q5
/*let result = '['
for (let i = 0;i< countries.length; i++){
  let indexes = countries[i].length;
  if (i < 10){
   result = result + indexes + ',';
  } else{
    result = result + indexes + ']'
  }

}
console.log(result)*/