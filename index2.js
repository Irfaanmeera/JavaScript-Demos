const express = require('express');
const app = express();
const port = 3000;


// Apply middleware
app.use(express.json()); // For parsing application/json

// Define route
app.get('/example/:id', (req, res) => {

    const id= req.params.id

    if(id%2!==0){
        console.log('The number is odd')
        res.send('The number is odd')
    }else{
        console.log('The number is even.')
    res.send('The number is even.');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
