const nestedArray = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [8, 9]
];


// function reverseArr(arr){
//     const flatArr= arr.flat().flat()
//     return flatArr.reverse()
// }

// console.log(reverseArr(nestedArray))

const reverseArr = nestedArray => {
    if (!Array.isArray(nestedArray)) return nestedArray;
    nestedArray = nestedArray.reverse();
   
    nestedArray = nestedArray.map(el => reverseArr(el));
   
    return nestedArray
};
console.log(reverseArr(nestedArray))

console.log(!Array.isArray(nestedArray))
