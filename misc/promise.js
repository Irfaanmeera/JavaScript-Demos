let p = new Promise((resolve,reject)=>{
    let a = 1+4;

    if(a==3){
        resolve('Successfull')
    }else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('This is in the then: ' +message)
})
.catch((message)=>{
    console.log('This is in the catch: ' +message)
})