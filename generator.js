function* generatorfn(num){
    let multiplier=1;
    while (true){
        yield multiplier * num;
        multiplier++;
    }
}

const multiples = generatorfn(3)

console.log(multiples.next().value)
console.log(multiples.next().value)
console.log(multiples.next().value)
console.log(multiples.next().value)