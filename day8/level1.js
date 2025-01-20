//  Q1
//const dog = {}

//  Q2
//console.log(dog)

// Q3
/*const dog ={
name: 'Simba',
legs: 4,
color: 'brown',
age : 2,
bark: 'woof woof'
}
 //console.log(dog) 

 //Q4
 console.log(dog.name)
 console.log(dog.legs)
 console.log(dog.color)
 console.log(dog[age])
 console.log(dog.bark)*/

//Q5
const dog = {
    name: 'Simba',
    legs: 4,
    color: 'brown',
    age: 2,
    bark: 'woof woof'
}

dog.breed = 'mammalian'
dog.getDogInfo = function(){
    `$[name] is a $[breed] dog.\n He is $[color] in color and has $[legs]legs`
}

console.log(dog)