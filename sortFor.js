let arr =[22,33,78,67,45]

for(i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            var temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;       
         }
    }
}

console.log(arr)