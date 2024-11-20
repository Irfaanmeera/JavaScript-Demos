let arr = ['apple','orange','banana','strawberry']

let lengthyWord= arr.reduce((prev,curr)=>curr.length>prev.length?curr:prev,'')

console.log(lengthyWord)