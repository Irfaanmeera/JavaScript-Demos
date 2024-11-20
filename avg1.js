function avg(...numbers){
    let sum = numbers.reduce((acc,current)=>acc+current,0)
    let avgNum = sum/numbers.length

    console.log(avgNum)
}

avg(10,20,30,40)