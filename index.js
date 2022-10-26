const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.Port || 5000;
app.use(cors());


const category = require('./data/categoriesOfCourse.json');
const courses = require('./data/coursesDetails.json')


app.get('/course-category',(req,res)=>{
    res.send(category)
});
app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const course = courses.find( c => c.category_id === id);
    res.send(course)
})


app.listen(Port,()=>{
    console.log('Server is running on port', 5000)
});