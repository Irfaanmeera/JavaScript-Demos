// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.greet = function(){
//     console.log(`Hi This is ${this.name}, I am ${this.age}`)
// }

// const person1 = new Person('Irfaan', 34)
// const person2 = new Person('Nabees',35)

// person1.greet()
// person2.greet()


//prototype inheritance without constructor function

const animal = {
    speak:function(){
        console.log(`${this.name} makes a noise`)
    }
}
const dog= Object.create(animal)

dog.name='Buddy'
dog.bark = function(){
        console.log(`${this.name} barks`)
    }


dog.speak()
dog.bark()

console.log(dog.__proto__ === animal)