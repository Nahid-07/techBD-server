const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());





app.listen(Port,()=>{
    console.log('Server is running on port', 5000)
});