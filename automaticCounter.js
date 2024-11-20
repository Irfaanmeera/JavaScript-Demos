let countDownValue=10

function updateCount(){
console.log(countDownValue)
countDownValue--;

if(countDownValue<0){
    clearInterval(interval)
    console.log('Countdown finished')
}

}

let interval = setInterval(updateCount,1000)

