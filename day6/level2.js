let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9]
let result = ""
let randNum = parseInt(Math.random()*10)
for (let i = 0; i<randNum ;i++){
  let randIndex = parseInt(Math.random(1) * characters.length);
result = result + characters[randIndex]
}
console.log(result)
