let arr = ['Irfaan','Chennai']

let person ={
    name:"Irfaan",
    place:"Chennai",
    getInfo: function(){
        console.log(`This is ${this.name} from ${this.place}`)
    }
}

Object.prototype.sayHello = function(){
    console.log(`This is ${this.name} and I am very happy`)
}

let person2= { 
    name:'Ameer'
}

let person3 = {
    name:'Inaarah'
}

function fun(){
//
}

Function.prototype.sayHi = function(){
    (console.log('I am confident'))
}
person2.__proto__=person;

console.log(person2.place)
// person2.sayHello()
fun.sayHi()