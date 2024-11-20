function* mygenerator(){
    let evenNumber =2;
    while(true){
        yield evenNumber;
        evenNumber+=2;
    }
}
const evenNumbergenerator= mygenerator()

console.log(evenNumbergenerator.next().value)
console.log(evenNumbergenerator.next().value)
console.log(evenNumbergenerator.next().value)
console.log(evenNumbergenerator.next().value)
