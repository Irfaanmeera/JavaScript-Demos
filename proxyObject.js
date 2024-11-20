// let target={
//     message1:'Hello',
//     message2:'World',
//     message3:'Irfaan'
// }

// let handler ={
// get:function(target,prop,receiver){

//     return target[prop]
// }
// }

// let proxy = new Proxy(target,handler)

// console.log(proxy.message2)
// console.log(proxy.message1)
// console.log(proxy.message3)

// let person ={
//     age:12
// }


//proxy object fro validation

// let handler = {
//     set:function(target,prop,value){
//         if(prop==='age' && typeof value !== 'number'){
//             throw new TypeError('Invalid age')
//         }
//         target[prop] = value
//         return true;
//     }
// }
// let proxy = new Proxy(person,handler)

// proxy.age = 30
// proxy.age = 'thirty'

// console.log(proxy.age)


//proxy object for property access control

let target ={
    secret:'Hidden message',
    public:'Visible message'
}

let handler = {
    get:function(target,prop,receiver){
        if(prop ==='secret'){
           return 'Access denied'
        }
        return target[prop]
    }
}

let proxy = new Proxy(target,handler)
console.log(proxy.secret)