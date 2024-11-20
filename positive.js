// let arr = [1, -3, 9, -15, 90,-43]

// function getPositive(arr){
//     let newArr =[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// console.log(getPositive(arr))



//filter method


// let arr = [1, -3, 9, -15, 90,-43]

// let newArr = arr.filter((elem)=>elem>0)

// console.log(newArr)




//for of

function getPositive(arr){
    let newArr = [];

    for(num of arr){
        if(num>0){
            newArr.push(num)
        }
    }
    return newArr;
}

console.log(getPositive([1, -3, 9, -15, 90,-43]))