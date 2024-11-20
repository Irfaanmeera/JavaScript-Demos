const express = require('express');
const app = express();



app.get('/student/:id',((req,res)=>{
    const marks = req.params.id

    if(marks > 50){
    res.send('Congratulations, You passed')
}else{
    res.send('Failed')
}
 
}));


app.listen(3000,console.log('Server connected successfully'))
