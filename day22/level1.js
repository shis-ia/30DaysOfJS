

let places = document.querySelector('.places')
// console.log(places.innerHTML)

for(let i = 0; i < 102; i++){
    number = document.createElement('div')
    number.className = 'number'
    number.textContent = i
    places.appendChild(number)
     

    if(i % 2 === 0){
        number.style.backgroundColor = 'green'
    
    } else{
        number.style.backgroundColor = 'yellow'
    }
}

// console.log(places.innerHTML)










