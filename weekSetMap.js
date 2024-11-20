// let weakMap = new WeakMap()
// let obj ={name:''}
// let obj1= {place:'Chennai'}

// weakMap.set(obj,'Irfaan')
// weakMap.set(obj1,'Chennai')
// // weakMap.delete(obj)
// console.log(weakMap.get(obj))

let weakSet = new WeakSet()

let obj = {name:'Irfaan'}

weakSet.add(obj)

console.log(weakSet.has(obj))