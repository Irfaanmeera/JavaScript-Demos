function hof(callback){
    callback()
}

hof(sayHello)

function sayHello(){
    console.log('Hello')
}