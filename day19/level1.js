//Q1

function numbers() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    return plusOne
}
const plusOne = numbers()

console.log(plusOne())
console.log(plusOne())
console.log(plusOne())
console.log(plusOne())

