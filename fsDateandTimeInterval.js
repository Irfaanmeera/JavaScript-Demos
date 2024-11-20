
const fs = require ('fs')
const path = require('path')

function writeFile(){
    const dateTime = new Date().toLocaleString()
   
    fs.writeFile('./file.text',dateTime,((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`${dateTime}`)
        }
    }))
}
let count =0
let iterations =5
function startWritingWithDelay(){
    const interval =setInterval( ()=>{
        if(count<iterations){
            writeFile()
            count++;
        }else{
            clearInterval(interval)
            console.group('Finished writing to console')
        }
    },2000)

}

startWritingWithDelay()