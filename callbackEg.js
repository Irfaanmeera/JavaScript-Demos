function calculateSquare(number,callback){
const result = number *number;
callback(result)
}

function displayResult(result){
    console.log(result)
}

calculateSquare(5,displayResult)