let arr = [23,45,67,78,54]

let firstLarge='';
 
for(i=0;i<arr.length;i++){
        if(arr[i]>firstLarge){
           
            firstLarge=arr[i]
        }
    }


console.log(firstLarge)