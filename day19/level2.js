function outerfunction() {
    let number = 5;
    function mathSum() {
        number++
        return number
    }
    function mathMinus() {
        number--
        return number
    }
    function mathAdd() {
        number++
        return number
    }
    return {
        mathSum: mathSum(),
        mathMinus: mathMinus(),
        mathAdd: mathAdd()
    }
}
const innerfunction = outerfunction()

console.log(innerfunction.mathSum)
console.log(innerfunction.mathMinus)
 console.log(innerfunction.mathAdd)



