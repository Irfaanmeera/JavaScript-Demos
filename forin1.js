let person ={
    name:'Irfaan',
    place:"Chennai"
}

for(let key in person){
    console.log(`This is ${person[key]}`)
}

let numbers = [1,2,3,4,5]

for(let number in numbers){
    console.log(number)//indicates index
    console.log(numbers)//indicate the  numbers
    
}

for(let number of numbers){
    console.log(number)
}