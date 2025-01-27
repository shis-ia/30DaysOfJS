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
        this.title += title
    }

    set setSkills(skill){
        this.skills.push(skill)  //set method used to modify values
    }  
}


//Q2

class Domestic extends Animals{
    constructor(name,age,color,legs,owner){
        super(name,age,color,legs)
        this.owner = owner
    }
firstInfor(){
    console.log('I am a child of class animals')
}

}
const animal1= new Domestic('Dog',2,'black',4,'Mark') 
animal1.setSkills = 'jumping'
animal1.setSkills = 'long runner'
animal1.setSkills = 'finding lost things'
animal1.setTitle = 3

const animal2 = new Domestic('Cat',4,'gray',3,'Mary')
animal2.setSkills = 'chessing'
animal2.setSkills = 'catching things'
animal2.setTitle = 1


console.log(animal1)
console.log(animal1.getNameAge())
console.log(animal1.firstInfor())


console.log(animal2)
console.log(animal2.firstInfor())
console.log(animal2.getNameAge())

