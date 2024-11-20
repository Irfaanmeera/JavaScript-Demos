let duplicatedarr = ['apple','orange','grapes','pineapple','apple','grapes']
let count={}
let countArr = duplicatedarr.map(num=>count[num]=count[num]+1||1)

let duplicateCount ={}
let countDuplicate = Object.entries(count).forEach(([key,value])=>{
    if(value>1){
        duplicateCount[key] = value
    }
})



console.log(duplicateCount)