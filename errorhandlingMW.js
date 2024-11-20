const express = require('express')
const app = express();

app.use((req,res,next)=>{
    const error = new Error('This is an error')
    next(error)
})
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('Something went wrong')

})

 
app.listen(3000,console.log('Server Connected Succesfully'))