let arr = [1,2,3,3,4,4,5]

function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate(arr))



