function rotateArr(arr){
    var last= arr.pop()
    arr.unshift(last)
    return arr;
}

console.log(rotateArr([1,2,3]))