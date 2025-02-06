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
function changeColor(){
    minPro.style.color = getRandomColor();
}


 setInterval(changeColor,1000)


 let done = "Challenge"
 if(done.includes("Done")){
    console.log("Present")
 }

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   const rndInt = randomIntFromInterval(1, 6);
//   console.log(rndInt);

