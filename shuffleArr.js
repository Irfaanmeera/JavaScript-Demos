const arr = [22, 56, 78, 90, 37];

function shuffleArr(arr){
        for (let i = 0; i < arr.length; i++){
        
        let random = Math.floor(Math.random() * (i + 1));
    
        [arr[random], arr[i]] = [arr[i], arr[random]];
    }
    return arr;
}

console.log(shuffleArr(arr))

