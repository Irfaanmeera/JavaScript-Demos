

const num=787

function reverseNum(num){
    let reverseNum=0
    while(num>0){
    let lastDigit = num%10
    reverseNum = reverseNum*10+lastDigit;
    num= Math.floor((num/10))
  }
  
return reverseNum 
}

console.log(reverseNum(num)===num)