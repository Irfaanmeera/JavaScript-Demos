let person = {
    name:'Irfaan',
    place:'Chennai'
}
console.log(person)

delete person.name;

console.log(person)
console.log(Object.keys(person))

delete person.place;


console.log(Object.keys(person))