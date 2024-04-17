// fibonacci Sequence 
//*1

let fib = [0,1];
let fibonacciGen = function(n){
for(let i=2; i<=n; i++){
   
    fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);
console.log(fib.toString())
}
fibonacciGen(10)