function* generatorfn(num){
   yield 1;
   yield 2;
   yield 3;
}

const multiples = generatorfn()

console.log(multiples.next())
console.log(multiples.next()) 
console.log(multiples.next())
console.log(multiples.next())  
