const express= require("express");
require("./db/conn");
const Student=require("./models/students")
const app=express();
const studentRouter=require("./router/student");
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);
app.post('/students',(req,res)=>{
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);

    }).catch((e)=>{
        res.status(400).send(e);
    })
    
})

app.listen(port,()=>{
    console.log(`connection successful at ${port}`)
})