function fibonacci(limit,a=0,b=1){
    if(a>=limit){
        return ;
    }
    console.log(a)
    return fibonacci(limit,b,a+b)
}

fibonacci(100)