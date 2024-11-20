const fruits = ['banana','apple','strawberry','orange']

fruits.sort((a,b)=>{
    return b.localeCompare(a)
})

console.log(fruits)