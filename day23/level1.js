let numbers = document.querySelector('.allNumbers')
console.log(numbers.innerHTML)

for(let i = 0; i < InputDeviceInfo.length; i++){
    eachNumber = document.createElement('div')
    eachNumber.className = 'eachNumber'
    eachNumber.textContent = i
    numbers.appendChild(eachNumber)

    if(i % 2 === 0){
        eachNumber.style.backgroundColor = 'green'
    } else{
        eachNumber.style.backgroundColor = 'rgb(245, 245, 116)'
    }
    
}
console.log(numbers.innerHTML)
