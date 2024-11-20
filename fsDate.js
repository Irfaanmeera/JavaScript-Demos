var fs = require('fs')


const currentDate = new Date();
const displayDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}

${currentDate.getHours()}:${currentDate.getMinutes()}`

const formatteddate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`

const fileName = `file_${formatteddate}.txt`
fs.writeFile(fileName,displayDate,(err)=>{
    if(err){
        console.log('File not created')
    }else{
        console.log('File created')
    }
})