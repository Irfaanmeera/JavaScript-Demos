const express = require ('express')

const app= express()
const port = 3000;


app.use(express.json())

app.get('/user',(req,res)=>{
    const user1={
        name:req.query.name,
        place:req.query.place

    }
    console.log(user1)
    res.send(user1)
})

app.listen(port,()=>{
    console.log('Server connected')
})