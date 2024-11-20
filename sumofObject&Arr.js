const ba=[{af:[434,23],ag:56},{af:[43,234],ag:6},{af:[434,23],ag:62},{af:[96,23],ag:11}] 
let sum=0;
ba.forEach(obj=>{
    obj.af.forEach((num)=>sum+=num)
    sum += obj.ag
})

console.log(sum)



//------- sum of ag values---->

// let sum=0
// ba.forEach(obj=>{
//     sum+=obj.ag
// })

// console.log(sum)

//----Product of af arrays----->  output - [ 9982, 10062, 9982, 2208 ]

// function sum(arr){ 
//    return ba.map((obj)=>obj.af.reduce((acc,curr)=>acc*curr,1))
// }
//  console.log(sum(ba))

//Filter objects by ag value:------->

// function filterObj(arr){
//     return ba.filter((obj)=>obj.ag>10)
// }
// console.log(filterObj(ba))

//Filter objects by ag value:------->
// function maxAg(arr){
//    return ba.reduce((maxObj,obj)=>obj.ag>maxObj.ag?obj:maxObj,arr[0])
// }
// console.log(maxAg(ba))


// Find the object with the minimum ag value.---->
// function minAg(arr){
//     return ba.reduce((minObj,obj)=>obj.ag<minObj.ag?obj:minObj,arr[0])
// }
// console.log(minAg(ba))

// function minAg(arr){
//    let min = Infinity
//    for(let i=0;i<arr.length;i++){
//     if(arr[i].ag<min){
//         min=arr[i].ag
//     }
//    }
//    return min;
// }
// console.log(minAg(ba))


// -----Sort by ag value:------>

// function sortAsc(arr){
//     for(let i= 0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i].ag > arr[j].ag){
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
       
//     }
//     return arr;
// }

// console.log(sortAsc(ba))


// -----Calculate the average of all the first elements in each af array.----->
// function avgAfFirst(arr){
//   let firstElement = arr.map((obj)=>obj.af[0])

//   let sum = firstElement.reduce((acc,curr)=>acc+curr,0)

//   return sum/firstElement.length
// }

// console.log(avgAfFirst(ba))


// ----Find the first object where the first element of af is 434.--->
// function search(arr){
//   return arr.map(obj=>obj.af[0] ==434?obj:'')

// }
// function search(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].af[0] === 434){
//             return arr[i]
//         }
//     }
  
//   }
// console.log(search(ba))


// ------>Reverse the order of elements in each af array.---->
// function reverseAf(arr){
//     for(let i=0;i<arr.length;i++){
//         [arr[i].af[0],arr[i].af[1]] = [arr[i].af[1],arr[i].af[0]]
//     }
//     return arr;
// }
// console.log(reverseAf(ba))


// Concatenate all af arrays into a single array.------->

// function concatenateAf(arr){
//   return arr.reduce((acc,obj)=>acc.concat(obj.af),[])
// }

// console.log(concatenateAf(ba))


// -----Find the sum of all elements in af arrays:
// function sumAf(arr){
// let sum=0
// arr.forEach((obj)=>{
//     obj.af.forEach((num)=>sum+=num)
// })
// return sum
// }

// console.log(sumAf(ba))

