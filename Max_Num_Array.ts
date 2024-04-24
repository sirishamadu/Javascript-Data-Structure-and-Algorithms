//Find Maximum Number: Write a function to find the maximum number in an array
let arr = [2,5,1,7,9,2,5,10]
let max = function(arr){
    let maxNum = arr[0];
    let len = arr.length-1;
    for(let i=1; i<=len; i++){
        if(maxNum < arr[i])
            maxNum = arr[i];
    }
    console.log(maxNum);
    return maxNum;
}
max(arr);

// #2
// let max = function(arr){
//     let maxNum = Math.max(...arr);
//     console.log(maxNum);
// }
// max(arr);