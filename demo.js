const str = ['Wick','Irfaan','Win']

function wStr(str){
    let wStr =[]
    for(let word of str){
        
        if(word[0]==='W'){
            wStr.push(word)
        }
   
    }
    return wStr;
}
console.log(wStr(str))