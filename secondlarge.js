
// let arr = [11,34,23,57,45,50]


// let largestNum= '';
// let secondLargest = '';
// for(let i = 0;i<arr.length;i++){
//         if(arr[i]>largestNum){
//             secondLargest = largestNum;
//             largestNum = arr[i]
//         } else if(arr[i]>secondLargest && arr[i]<largestNum){
//             secondLargest = arr[i]
//         }
//     }

// console.log(largestNum)
// console.log(secondLargest)
    
    let arr = [23,45,67,78,54]

    let firstLarge='';
    let secondLarge ='';
     
    for(i=0;i<arr.length;i++){
            if(arr[i]>firstLarge){
                secondLarge = firstLarge;
                firstLarge=arr[i]
            }
        }
    
    
    console.log(secondLarge)
