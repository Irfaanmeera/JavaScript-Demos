let arr1 = [1,2,3,5,13,14,34]
let arr2= [10,5,4,12,14,2]



function mergeExclusive(arr1,arr2){
    let arr=[]

for(var el of arr1){
    if(!arr2.includes(el))
    arr.push(el)
}
for(var el of arr2){
    if(!arr1.includes(el)){
        arr.push(el)
    }
}
return arr;
}

console.log(mergeExclusive(arr1,arr2))