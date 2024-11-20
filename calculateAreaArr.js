let radius = [3,5,6,7]

// const calculateArea = function(){
//     const areaArr = []
//     for(i=0;i<radius.length;i++){
//         areaArr.push(Math.PI * radius[i]*radius[i])
//     }
//     return areaArr;
// }

// console.log(calculateArea(radius))

// const areaArr = radius.map((radius)=>Math.PI*radius*radius)
// const circumArr = radius.map((radius)=>2*Math.PI*radius)
// const diameterArr = radius.map((radius)=>2*radius)

// console.log(areaArr)
// console.log(circumArr)
// console.log(diameterArr)


const area = function(radius){
    return Math.PI*radius*radius
}

// const circumference = function(radius){
//     return 2*Math.PI*radius
// }

// const calculate = function(radius,logic){
//     const output= [];
//     for(i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

console.log(radius.map(area))
// console.log(calculate(radius,circumference))