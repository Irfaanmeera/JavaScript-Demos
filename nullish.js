// function foo(bar){
//     bar = bar ?? 55;
//     console.log(bar)
// }
// foo();
// foo(22)


const user ={
dog :{
    name:"Alex"
}
}

console.log(user.dog?.name)
console.log(user.cat?.name??'No cat name defined')