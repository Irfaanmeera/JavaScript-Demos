
let arr = [1,2,4,3,6]

function reverseArr(arr){
   let reversedArr=[]

   for(i=arr.length-1;i>=0;i--){
    reversedArr.push(arr[i])
   }
   return reversedArr;
}

console.log(reverseArr(arr))