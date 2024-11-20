
const cart = ['shoes','pants','kurti']

const promise = createOrder(cart);

promise.then((orderId)=>{
   console.log(orderId)
   return orderId;
})
.catch((error)=>{
    console.log(error.message)
})
.then((orderId)=>{
    return proceedToPayment(orderId)
})

.then((paymentInfo)=>{
    console.log(paymentInfo)
})



//production of promise - createOrder function returns a promise

function createOrder(cart){
const pr = new Promise((resolve,reject)=>{
    
    if(!validateCart(cart)){
        const error = new Error('Cart is empty')
        reject(error)
    }
    const orderId='12345'
    if(orderId){
    setTimeout(()=>{
        resolve(orderId)
    },5000)
    }
    
})
return pr;
}

function validateCart(){
    return false;
}

function proceedToPayment(orderId){
   return new Promise((resolve,reject)=>{
    resolve('Payment is Successfull');
   })
}


    
