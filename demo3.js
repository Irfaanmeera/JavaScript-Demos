const arr=[1,2,3,4,5,6]

function secondLeast(arr){
    if(arr.length<2){
        return null;
    }
    let least = Infinity
    let secondLeast =Infinity
    for(let i=0;i<arr.length;i++){
     
            if(arr[i]<least){
                secondLeast=least
                least = arr[i]
                
            }else if(arr[i]<secondLeast && arr[i]!==least){
                secondLeast=arr[i]
            }
          
    }
    return secondLeast;
}

console.log(secondLeast(arr))