'use strict'



function BinarioADecimal(num) {
    // Initialize variable result, which will store the result and pow which will act as exponent.
    let result = 0
    let pow = 0
    // Traverse the received number starting from the last unit, perform the formula to transform to decimal and increment pow with each iteration.
    for (let i = num.length - 1; i >= 0; i--) {
        result += num[i] * 2 ** pow;
        pow++;
    }
    return result
}


function DecimalABinario(num) {
    let result = [];
    while (num !== 0) {
        result.unshift(num % 2)
        num = Math.floor(num/2)
    }
    return result.join('')
}
console.log(DecimalABinario(21))


module.exports = {
    BinarioADecimal,
    DecimalABinario,
  }