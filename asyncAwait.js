async function f(){
    
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('done!'),1000);
    });
    const result = await promise;
    console.log(result)
}
f()