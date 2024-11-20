let duplicatedarr = [22,45,22,6,76,6]

const duplicates = duplicatedarr.filter((ele,index,arr)=>arr.indexOf(ele) !== index)

console.log(duplicates)


let arr = ['jan','feb','jan','march','april','march']

let uniqueArr = arr.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;
},[])

console.log(uniqueArr)



