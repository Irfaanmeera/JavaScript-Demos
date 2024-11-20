function isPrime(n){
for(i=2;i<=n/2;i++){
    if(n%i===0){
        return false;
    }
}
return true;
}

function primeArr(nPrimes,startAt){
    var i= startAt;
    var count =0;
    let arr=[]
    while(count<nPrimes){
        if(isPrime(i)){
            arr.push(i)
            count++;
        }
        
        i++;
    }
    return arr;
}
console.log(primeArr(5,10))

