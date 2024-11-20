let arr =[1,2,3,4,2,3]

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr[j]=0;
        }
    }
}

console.log(arr)