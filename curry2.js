


let calArea = function(l){
    return function(b){
        return function(h){
            return l*b*h;
        }
    }
}
console.log(calArea(2)(3)(5));


// console.log(calArea(3)(4)(8))


// function calArea(l,b,h){
//     return(l*b*h)

// }
// console.log(calArea(3,4,8))

// console.log(calArea(2,4,8))

