const express = require('express')
const app = express();


app.get('/student',((req,res)=>{
    const person = {
        name:req.query.name,
        age:req.query.age,
        place:req.query.place
    }
    
    res.send(person)
    console.log(person)
    
}))

app.listen(3000,console.log('Server connected Successfuly'))