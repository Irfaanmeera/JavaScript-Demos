// var object = Object.create(null)

// object.name = 'Irfaan'

// console.log(object)


// var object = {}

// console.log(Object.keys(object))

// object.name = 'Irfaan'
// console.log(object)
// console.log(Object.keys(object))


function Person(name,age){
    var object = {};

    object.name = name;
    object.age = age;

    return object;
}

var object = new Person('Irfaan','21')

console.log(object)

console.log(Object.getPrototypeOf(object))