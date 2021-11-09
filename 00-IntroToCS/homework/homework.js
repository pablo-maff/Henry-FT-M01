'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  let pow = 0
  let n = num.toString();
  for (let i = n.length-1; i >= 0; i--){  
      let calc = n[i] * 2 ** pow;
      pow++;
      decimal += calc;
  };
  return decimal;
}



function DecimalABinario(num) {
  // tu codigo aca
  console.log('num', num)
  if(num >= 1) {
    // If num is not divisible by 2 then recursively return proceeding
    // binary of the num minus 1, 1 is added for the leftover 1 num
    if (num % 2) {
        return DecimalABinario((num - 1) / 2) + 1;
    } else {
       // Recursively return proceeding binary digits
        return DecimalABinario(num / 2) + 0;
    }
 } else {
    // Exit condition
    return '';
 };
};
console.log(DecimalABinario(2))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}