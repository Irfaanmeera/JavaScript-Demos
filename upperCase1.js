let arr =['apple','banana','orange','grapes']

let upperCase= arr.map(elem=>{
    let char= elem.split('')
    char[2] = char[2].toUpperCase()
    return char.join('')
})

console.log(upperCase)