let arr1 = [1,2,3,5,13,14,34]
let arr2= [10,5,4,12,14,2]

function mergeArr(arr1,arr2){
    let arr =[]

    for(var el of arr1){
        if(!arr2.includes(el)){
            arr.push(el)
        }
    }
    return arr;
}

console.log(mergeArr(arr1,arr2))