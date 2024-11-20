let arr = [1,2,3,3,4,5,5,6]


function duplicateArr(){
let duplicateArr = []
let count = 0;
for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i],i+1)!== -1){
    duplicateArr.push(arr[i])   
    count++;
    }
}
return {count,duplicateArr};
}

console.log(duplicateArr(arr))