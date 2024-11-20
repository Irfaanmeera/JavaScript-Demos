function higherOrder(callback){
    setTimeout(()=>{
        const result = 'Task completed';
        callback(result)
    },1000)
}

function callbackHandler(message){
    console.log(message)
}

higherOrder(callbackHandler)