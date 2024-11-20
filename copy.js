let person = {
    name:"Irfaan",
    address:{
       state:"TN",
       city:"Chennai"
    }
}

//shallow copy

let person2= Object.assign({}, person)

person2.address.city= 'Mumbai';

console.log(person)
console.log(person2.address.city)


//deep copy

let person3 = JSON.parse(JSON.stringify(person))


person3.address.state ="Maharashtra"

console.log(person.address.state)
console.log(person3.address.state)
