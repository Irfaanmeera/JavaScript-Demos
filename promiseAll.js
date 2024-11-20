let promise1 = new Promise((resolve,reject)=>{
    setTimeout((reject),1500,'Promise 1 rejected')
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout((resolve),1000,'Promise 2 successfull')
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout((resolve),1500,'Promise3 successfull')
})

// Promise.race([promise1,promise2]).then((value)=>{
//     console.log('Promise resolved', value)
// }) .catch((err)=>{
//             console.log('Promise not resolved: ',err)
//         })



// Promise.all([promise1,promise2])
// .then((value)=>{
//         console.log(value)
//     })
//     .catch((err)=>{
//         console.log('One of the promises not resolved',err)
//     })


    
// Promise.any([promise1,promise2]).then((result)=>{
//     console.log(result)

// })
console.log(promise1)

Promise.allSettled([promise1,promise2]).then((result)=>{
    console.log(result)
})