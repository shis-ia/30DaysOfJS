const minPro = document.querySelector('.year')

function getRandomColor() {
    // array initialization is with square brackets []
    let letters = [0, 1, 2, 3, 4, 5, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let random = parseInt(Math.random() * letters.length)
        color += letters[random]
    }
    return color;
}
function changeColor() {
    minPro.style.color = getRandomColor();
}


setInterval(changeColor, 1000)



const dateTime = document.querySelector('.DateTime')

function getDateTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const now = new Date();
    let month = months[now.getMonth()];
    function presentDay() {
        let day = now.getDate()
        if (day < 10) {
            let newday = '0' + day
            return newday
        }
    }

    let year = now.getFullYear()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    let timeDate = month + ' ' + presentDay() + ',' + year + ' ' + hours + ':' + minutes + ':' + seconds

    return timeDate;
}



dateTime.textContent = getDateTime()

function changeDateTimeColor() {
    dateTime.style.backgroundColor = getRandomColor()
}
setInterval(changeDateTimeColor, 2000)


const paragraphs = document.querySelectorAll('.list')
for(let i = 0; i < paragraphs.length; i++){
    let text = paragraphs[i]
    let content = text.textContent
    // console.log(content)
    // let done = content.includes('Done')
    // console.log(done)
    if (content.includes('Done')){
        text.style.backgroundColor = 'green'
    } else if(content.includes('Ongoing')){
        text.style.backgroundColor = 'yellow'
    } else {
        text.style.backgroundColor = 'red'
    }
    
}
