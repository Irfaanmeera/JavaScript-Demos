// function firstFunction(param,callback){
//     setTimeout(()=>{
//         console.log('First function executed')
//         callback(null,'result of first function')
//     },1000)
// }
// function secondFunction(param,callback){
//     setTimeout(()=>{
//         console.log('Second function executed')
//         callback(null,'result of second function')
//     },1000)
// }
// function thirdFunction(param,callback){
//     setTimeout(()=>{
//         console.log('Third function executed')
//         callback(null,'result of third function')
//     },1000)
// }



//callback hell
// firstFunction('some param',(err,result1)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
// secondFunction(result1,(err,result2)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
    
// thirdFunction(result2,(err,result3)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log('All functions executed successfully')
    
// })
// })
// })

//promise
function firstFunction(param){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('First function executed')
        resolve('result of first function')
    },1000)
  }) 
}
function secondFunction(param){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Second function executed')
        resolve('result of second function')
    },1000)
  }) 
}
function thirdFunction(param){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Third function executed')
        resolve('result of third function')
    },1000)
  }) 
}

firstFunction('some param')
    .then((result1)=>{
         return secondFunction(result1)
    }).then((result2)=>{
         return thirdFunction(result2)
    }).then((result3)=>{
         console.log('All funcions executed')
    }).catch((err)=>{
        console.log(err)
    })
