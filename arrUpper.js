// let fruits = ['apple','banana','orange','strawberry']

// let upperCasearr = fruits.map((elem)=>elem.charAt(0).toUpperCase()+elem.slice(1))

// console.log(upperCasearr)

let str = 'I am hungry'

let upperStr = str.split(' ').map(elem=>elem.charAt(0).toUpperCase()+elem.slice(1)).join(' ')

console.log(upperStr)