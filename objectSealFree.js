let person ={
    name:'Irfaan',
    place:'Chennai'
}

// Object.freeze(person)
Object.seal(person);

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

person.place = 'Kerala';
person.age =24;

console.log(person)