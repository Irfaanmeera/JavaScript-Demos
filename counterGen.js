function* genCounter(){
    let count=0
    while(true){
    yield count;
    count++;
    }
}

const counter = genCounter()

console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)