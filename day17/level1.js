

//Q1
let myData = {
    firstName : 'Charity',
    lastName:'Shisia',
    Age: 25,
    Country:'Kenya',
    City:'Nairobi'
}

let myDataStingfy = JSON.stringify(myData,undefined,4)
localStorage.setItem('myData',myDataStingfy)
console.log(localStorage)