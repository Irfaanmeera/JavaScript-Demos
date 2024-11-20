const obj1 = {a:3,b:6,c:10,d:2}
const obj2 = {a:3,b:6,c:10,e:5,f:8}

const keys1= Object.values(obj1)
const keys2 = Object.values(obj2)

let commonKeys= keys1.filter((key)=>keys2.includes(key))

console.log(commonKeys)