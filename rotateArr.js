function rotateArr(arr){
    var first = arr.shift()
    arr.push(first)
 
    return arr;
}

console.log(rotateArr([1,2,3]))