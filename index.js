const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());


const category = require('./data/categoriesOfCourse.json');


app.get('/course-category',(req,res)=>{
    res.send(category)
});


app.listen(Port,()=>{
    console.log('Server is running on port', 5000)
});