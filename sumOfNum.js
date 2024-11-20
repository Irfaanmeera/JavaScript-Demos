const getSum = num => {

    if (num === 0) return num
    console.log(num)
    return num % 10 + getSum(Math.floor(num / 10))

};

console.log(getSum(345))


// let num = 45678

// function sumNum(num){
    
//    let sum= num.toString().split('').reduce((acc,curr)=>acc+parseInt(curr),0)
//    return sum;

// }
// console.log(sumNum(num))


// let num = 123456

// function sumNum(num){
//     let sum=0;
//     var n = String(num)
//     for(char of n){
//        sum+=parseInt(char);
     
//     }
//   return sum;
// }
// console.log(sumNum(num))