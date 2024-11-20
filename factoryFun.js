function factoryFun(name,place){
    return {
        name:name,
        place:place,
        greet: function(){
            console.log(`Hi I am ${this.name} and I from ${this.place}`)
        }
    }
}

const person1 = factoryFun('Irfaan','Chennai')
const person2 = factoryFun('Ameer','Kerala')
person1.greet()
person2.greet()