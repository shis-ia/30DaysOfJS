const values = document.querySelector('.numbers')
let entries
for(let i = 0; i < 101; i++){
entries = document.createElement('div')
entries.className = 'eachNumber'
entries.style.fontSize = '24px'
entries.textContent = i
document.body.appendChild(entries)
}
 const eachNumber = document.querySelector('.eachNumber')
for (let i =0; i < eachNumber.length; i++){
    if (i % 2 === 0){
        eachNumber.style.backgroundColor = 'green'
    } else {
        eachNumber.style.backgroundColor = 'yellow'
    }
}