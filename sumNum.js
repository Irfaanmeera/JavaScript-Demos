let num = 123456

function sumNum(num){
    let sum=0;
    var n = String(num)
    for(char of n){
       sum+=parseInt(char);
     
    }
  return sum;
}
console.log(sumNum(num))