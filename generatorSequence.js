function* generator(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
}
const sequence = generator(1,5)

console.log([...sequence])
