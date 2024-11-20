const arr=[1,2,3,6,3,5,7,2,7,9]

function removeConsecutiveOdd(arr){
  let result =[]
for(let i=0;i<arr.length;i++){
 
  if(i>0 && arr[i]%2!==0 && arr[i-1]%2!==0){
   continue;
   }
result.push(arr[i])
  
}
return result;
}
console.log(removeConsecutiveOdd(arr))

