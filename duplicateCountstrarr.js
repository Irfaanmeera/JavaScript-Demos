let arr = ['jan','feb','jan','march','april','march']

// let uniqueArr = [];
// let count = 0;

// for(i=0;i<arr.length;i++){
//     if(arr.indexOf(arr[i],i+1)!==-1){
//         uniqueArr.push(arr[i])
//         count++;
//     }
// }

// console.log(uniqueArr, `Count of duplicates: ${count}`)

const duplicateArr = arr.reduce((obj,month)=>{
    if(obj[month]==undefined){
        obj[month] =1
        return obj;
    }else{
        obj[month]++;
        return obj;
    }
},{})

console.log(duplicateArr)