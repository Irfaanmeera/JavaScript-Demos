let arr1= [1,2,3,4,5]
let arr2 =[6,7,8,9,10]


function mergeArr(arr1,arr2){
let arr3=[]

for(el of arr1){
    arr3.push(el)
}
for(el of arr2){
    arr3.push(el)
}
return arr3;
}

console.log(mergeArr(arr1,arr2))