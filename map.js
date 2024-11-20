const arr = [2,4,5,6,7];

var output = arr.map((x)=>{
    return x*2;
   });
console.log(output);

var output = arr.map(function triple(x){
    return x*3;
});
console.log(output);

var output = arr.map((x)=>x.toString(2));
console.log(output);