//Q1
// const paragraphs = document.querySelectorAll('p')
// console.log(paragraphs)
// console.log(paragraphs.length)

// paragraphs.forEach((paragraph,i) => {
// paragraph.style.fontSize = '20px'
// if (i % 2 === 0){
//     paragraph.style.backgroundColor = 'yellow'
//     paragraph.style.color = 'blue'
//     paragraph.style.borderStyle = 'dotted'
// } else {
//     paragraph.style.backgroundColor = 'red'
//     paragraph.style.color = 'green'
//     paragraph.style.fontFamily = 'fantasy'
// }
// })

//Q2
// const paragraphs = document.querySelectorAll('p')
// paragraphs.forEach((paragraph, i) => {
//     if (i % 2 != 0){
// paragraph.style.color = 'green'
//     } else{
//         paragraph.style.color = 'red'
//     }
// }) 


//Q3
const paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = 'My name is Charity I am 25 years old'
paragraphs[1].textContent = 'I stay in Nairobi, the capital city of Kenya'
paragraphs[2].textContent = 'I am a health recods proffesional but currently studing programming '
// paragraphs[4].textContent = 'I am looking foward to be a tech pro and sharpen my skills'

 console.log(paragraphs)
