// 1 = 1
// 1 * 2 = 2
// 1 * 2 * 3 = 6
// 1 * 2 * 3 * 4 = 24
// 1 * 2 * 3 * 4 * 5 = 120
// 1 * 2 * 3 * 4 * 5 * 6 = 720
// 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040
// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 = 40320
// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 = 362880
// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800


function product(num){
    let product=1
    let sequence =''
     for(let i=1;i<num;i++){

        if(i==1){
         sequence = `${i}`
        }else{
            sequence += `* ${i}`
        }
         product*=i
         console.log(`${sequence} = ${product}`)
     }
}

product(10)