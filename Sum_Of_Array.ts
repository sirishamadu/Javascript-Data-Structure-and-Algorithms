// #1 Sum of Array
let arr = [5,2,3,6,4];
let sum = arr.reduce((a,b) => a+b,0);
console.log(sum);




// #2 
// let arr = [1,2,3,4];
// function sum(arr){
//     let sumArr = 0;
//     for (let i=0; i<arr.length; i++){
//         sumArr += arr[i];
//     }
    
//     console.log(sumArr);
// }
// sum(arr);

//#2 & #3 solutions are same but array has it own foreach method

// #3
// let arr = [1,2,3,4];
// let sum = 0;
// arr.forEach((item) => sum += item);
// console.log(sum);

//#4
// let arr = [5,2,3,6,4];
// let sum = 0;
// for(const item of arr){
//     sum += item
// }
// console.log(sum);