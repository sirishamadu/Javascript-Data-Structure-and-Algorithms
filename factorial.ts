//Factorial Calculation: Write a function to calculate the factorial of a given number.
let fac = 0;
function factorial(n){
    if(n<0)
    return -1;
    
    else if(n==0)
    return 1;
    
    else{
     fac = (n * factorial(n-1));
     return fac;
    }
}
factorial(5);
console.log(fac);

//#3 for loop
function factorialize1(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize1(5);

//#2
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
factorialize(5);

//#1
// let factorial = function(n){
//     let fac = 1;
//     for(let i=1; i<=n; i++){
//         fac = fac *i;
//     }
//     console.log('factorial of '+n+' is '+fac);
// }
// factorial(0);
