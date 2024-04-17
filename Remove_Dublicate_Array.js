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
console.log(newArr)




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
console.log([...new Set(arr]);