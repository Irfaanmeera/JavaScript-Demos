const arr =[2,43,5,63,76,89,45]

function secondLeast(arr){
    let secondLeast = Infinity;
    let least =Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
        if(arr[i]<least){
            least = arr[i]
        }else if(arr[i]<secondLeast && arr[i]!==least){
            secondLeast = arr[i]
            least = secondLeast;
        }
    }
}
    return secondLeast;
}

console.log(secondLeast(arr))