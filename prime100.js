function isPrime(n){
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

function primeNumbers(nPrimes){
    var n= 2;
    var count=0;

    while(count<nPrimes){
        if (isPrime(n)){
            console.log(n)
            count++;
        }
        n++;
    }
}

primeNumbers(100)