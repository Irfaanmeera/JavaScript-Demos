function memoizeAddition(){
    let cache ={};
    return (value)=>{
    if(value in cache){
        console.log('Fetched from cache')
        return cache[value]
    }else{
        const result = value+10;
        cache[value]=result;
        return result;
    }
 }
}

const addition= memoizeAddition()

console.log(addition(20))
console.log(addition(20))