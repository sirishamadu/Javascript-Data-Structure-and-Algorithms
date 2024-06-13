// Remove Dublicates from Array

//1 Delete dublicate array 

let arr = [1,2,3,2,3,1,5];
let newArr = [];
let len = arr.length
for(let i=0; i< len; i++){
    if(newArr.indexOf(arr[i]) === -1)  {
        newArr.push(arr[i])
    }  
}
console.log(newArr) // Output: [ 1, 2, 3, 5 ]




//2 Delete dublicate array 
let arr = [1,2,3,2,3,1,5];
let newArr = [];
let _temp;
let len = arr.length;
arr.sort();
for(let i= 0; i<len; i++){
 if(arr[i] !== _temp){
     newArr.push(arr[i]);
     _temp = arr[i]
 }
}
console.log(newArr);


//3 Remove dublicate from array using Object methods
let arr = [1,2,3,2,3,1,5];
let obj = {};

for(let i of arr){
    obj[i] = true;
}
let newArr = Object.keys(obj)
console.log(newArr)

//4 Remove dublicate array (direct built in method of JS, one line solution)
 let arr = [1,2,3,2,3,1,5];
// let newArr = new Set(arr);
console.log([...new Set(arr)]);


//Count or counter with IIFE and closure
const count = (() => {
    let counter = 0
    let innerFun = function(){
      counter += 1;
      console.log(counter);
    }
    innerFun.reset = function(){
      counter = 0;
    }
    return innerFun;
  })();
  count();//1
  count();//2
  count();//3
  count.reset();//0
  count();//1
  count();
  count();
  

/*Sliding window method for MAXIMUM AVERAGE SUBARRAY */
var findMaxAverage = function(nums, k) {
  let maxAvg = -Infinity;
  let startIndex = 0;
  let sum = 0;
   
   for(i=0; i<nums.length; i++){
       sum += nums[i];
       if(i-startIndex === k-1){
           let avg = sum/k;
           maxAvg = Math.max(maxAvg, avg);
           sum -= nums[startIndex];
           startIndex++;
       }
   }
   return maxAvg;
};
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));// Output: 12.7

/*Reverse the case of character eg lower to upper.*/
function reverseUpper(str){
  return str.split("").map(item => item==item.toLowerCase() ? item.toUpperCase() : item.toLowerCase());
}
reverseUpper("HEllO woRLd");// Output: heLLo WOrld

/*segregate 0s and 1s in an array*/
//Time complexity :- O(n) // as we dont have nested for loops
//Space complexity: O(1) // as we are only storing values in variable and not storing anything in array etc

function arrangeNums(arr){
  let count =0;
  for(let i=0; i<arr.length;i++){
    if(arr[i] === 0){
      count += 1;
    }
  }
  for(let i=0; i<count; i++){
    arr[i]=0;
  }
  for(let i=count; i<arr.length; i++){
    arr[i]=1;
  }
  return arr;
}
console.log(arrangeNums([1,0,0,1,0,1,1]));// Output: [ 0, 0, 0, 1, 1, 1, 1 ]

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].*/
var twoSum = function(nums, target) {
  let hashMap = {};
  for(i=0; i<nums.length; i++){
      
      let x = target - nums[i];
      if(hashMap.hasOwnProperty(x)){ //Implemented using hashMap
          return [hashMap[x], i]
      }
      hashMap[nums[i]] = i;
  }
  return [];
};

/*Find MAx number from array*/
let max = (arr) => {
  let maxNum = arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0);
  return maxNum
  let temp = 0;
  // let max2 = arr.forEach((i) => {
  //   if(i>temp){
  //     temp = i;
  //   }
  // })
  // return temp;
};
console.log(max([50, 70, 12, 4, 100, 49, 243, 98, 9999]));

/*Number od Islands*/
//Used iteration and recurcion
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '1') {
              count ++;
              dfs(grid, i, j);
          }
      }
  }
  return count;
  function dfs(grid, i, j) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
          return;
      }
      grid[i][j] = '0';
      dfs(grid, i + 1, j);
      dfs(grid, i - 1, j);
      dfs(grid, i, j + 1);
      dfs(grid, i, j - 1);
  }

function dfs(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
      return;
  }
  
  grid[i][j] = '0';
  
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}
  
};