let arr = [1,2,3,4,5]

// let sum=arr.reduceRight((acc,curr)=>acc+curr,0)

// let sum=0
// arr.forEach((elem)=>sum+=elem)

// console.log(sum)


// let sum =0;

// for(i=0;i<arr.length;i++){
//     sum +=arr[i];
// }

// console.log(sum)


let sum=0;
let i=0;
while(i<arr.length){
    sum+=arr[i]
    i++;
}

console.log(sum)