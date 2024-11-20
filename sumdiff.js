let arr = [1,2,3,4,5,6]

// let sum = arr.reduce((acc,curr)=>acc+curr,0)

// function sum(arr){
//     let sum=0;
// for(i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// return sum;
// }

// function sum(arr){
//         let sum=0;
//         let i = 0;
//         while(i < arr.length){
//             sum+=arr[i];
//             i++;
//         }
//         return sum;
//     }
let sum=0
let sumArr= arr.forEach((number)=>sum+=number)

console.log(sum)

