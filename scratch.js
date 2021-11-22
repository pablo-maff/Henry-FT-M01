x = 1;
var a = 5;
var b = 1;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9 o 10
}
c(8,9,10);
console.log('30=',b); //
console.log(x); // 1
