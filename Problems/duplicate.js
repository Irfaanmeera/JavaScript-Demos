// function removeDuplicate(arr){
//     return[...new Set(arr)]
// }
// console.log(removeDuplicate([1,2,3,4,4,5,6,6,]))


// function removeDuplicate(arr){

//     const uniqueArr = [];

//     for(let i=0;i<arr.length;i++){

//         if(uniqueArr.indexOf(arr[i])===-1)

//         uniqueArr.push(arr[i]);
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicate([1,2,3,4,4,5,6,6]))

let arr=[1,2,3,4,6,4,5,6,6]

function duplicate(arr){

    let duplicateArr = [];

    for(let i=0;i<arr.length;i++){

        if(duplicateArr.indexOf(arr[i]) === -1)

        duplicateArr.push(arr[i]);
    }
    return duplicateArr;
}
console.log(duplicate(arr))