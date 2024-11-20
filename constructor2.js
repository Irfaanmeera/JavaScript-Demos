class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    start(){
        console.log(`The ${this.name} of the year ${this.year} has started`)
    }
}

class evCar extends Car {
    constructor(name,year,edition){
        super(name,year)
       
        this.edition = edition
    }
    end(){
        console.log('The car stopped')
    }

    start(){
        super.start()
        console.log(`The edition is ${this.edition}`)
        this.end()
    }
}

bmw = new evCar('bmwA20',2024,6)
bmw.start()