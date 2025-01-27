

//Q1

class Animals { //class animals
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.title = 0
        this.skills = []
    }
    getNameAge() {
        const nameAge = this.name + ' ' + this.age  
        return nameAge
    }

    get getTitle() {
        return this.title   //getter method used to access values
    }

    set setTitle(title){
        this.title.push(title)  //set method used to modify values
    }  
}


//Q2

class Dog extends Animals{
    firstInfor(){
        console.log('I am dog a child of class animals')
    }
}

const animal1  = new Dog('Bosco',2,'black',4) 
console.log(animal1)
console.log(animal1.getNameAge())
console.log(animal1.firstInfor())

class Cat extends Animals{
    firstInfor(){
        console.log('I am cat a child of class animals')
    }
}
const animal2 = new Cat('maxie',4,'gray',3)
console.log(animal2)
console.log(animal2.firstInfor())
console.log(animal2.getNameAge())
