

let radius = [2,4,5,6]
const area = function(radius){
  return Math.PI*radius*radius;
}

const calculate = function(radius,logic){
    const resultArr=[];
    for(i=0;i<radius.length;i++){
        resultArr.push(logic(radius[i]))
    }
    return resultArr;
}

console.log(calculate(radius,area))