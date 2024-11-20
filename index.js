const express = require ('express')
const app = express()

app.get('/obj',(req,res)=>{
const obj= {
    name:'Irfaan',
    place:'Chennai'
}

res.json(obj)
})

app.listen(3000,()=>{
    console.log('Server connected')
})
