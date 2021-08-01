const express = require('express');

const app = express();
const port = 5000;


// GET API METHOD
app.get('/',(req, res)=>{
    console.log("First Api Run in Terminal"); // show in terminal
    res.send('First Api Show in Browser') // responce in browser window
});

// THIS METHOD RUN THE SERVER
app.listen(port,()=>{
    console.log("Local Server Run!");
});
