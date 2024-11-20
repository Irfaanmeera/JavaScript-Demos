let arr = [2,3,4,2,4,5,1]

// for(i=arr.length;i>arr.length/2;i--){
//    for(j=0;j<arr.length;j++)

//         var temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]= temp
    
//    }


// console.log(arr)


// let arry =[1,4,3,2,6];
    
//   console.log('before reversing array :',arry);
//   let n=arry.length-1;//n=4
  
//   for(let i=n,j=0;i>n/2;i--, j++){
    
//     let a= arry[i];
//     arry[i]=arry[j];
//     arry[j]=a;
   
//     }
//   console.log("after reversing the array",arry)


  //reduce method

  // let reverseArr = arr.reduce((acc,curr)=>[curr,...acc],[])

 
  
  


  //map method

  let reverseArr = arr.map((elem,index,arr)=>arr[arr.length-1-index])

  console.log(reverseArr)