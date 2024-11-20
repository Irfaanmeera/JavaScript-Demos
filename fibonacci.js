// function fibonacciCalculator(n){
//     if(n<=1){
//       return n;
//     }
    
//    return fibonacciCalculator(n-1) + fibonacciCalculator(n-2)
//     }
//   console.log(fibonacciCalculator(11))


  function fibonacci(n,memo={}){
    if(n<=1){
      return 1;
    }
    if(memo[n]){
      return memo[n]
    }

    return fibonacci(n-1,memo)+ fibonacci(n-2,memo)
  }

  console.log(fibonacci(10))