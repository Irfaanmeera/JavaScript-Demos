function modifyArray(arr,callback){
    arr.push(100)
    callback()
}
var arr= [1,2,3,4,5]

modifyArray(arr,function(){
    console.log(`Array is modified, ${arr}`)
})