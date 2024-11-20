class Vehicle{
    constructor(model){
        this.model = model;
      
    }

    getData(){
        console.log(`This is ${this.model}`)
    }
}

class Car extends Vehicle{
    constructor(model,year){
    super(model);
    this.year = year
    }

    getCarinfo(){
        console.log(`This is a ${this.model} and the year of manufacturing is ${this.year}`)
    }

   }


let ford = new Car('Ford',2016)
ford.getCarinfo()
