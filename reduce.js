var arr = [2,4,5,6,7];

var output = arr.reduce((acc,curr)=>{
    acc = acc + curr;
    return acc;
},0);
console.log(output);

var findMax = arr.reduce((max,curr)=>{
    if (curr > max){
    max = curr;
    }
    return max;
},0);
console.log(findMax);