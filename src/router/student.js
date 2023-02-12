const express=require("express");
const router=express.Router();
const Student=require("../models/students");
router.get("/thapa",(req,res)=>{
    res.send("hello whatsUp")
})
module.exports=router;
router.post('/students',async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})
//to get all data



router.get('/students',async (req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})
//to get sspecific data


router.get('/students/:id',async (req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
        
    }catch(e){
        res.status(500).send(e);
    }
})
router.delete('/students/:id',async (req,res)=>{
    try{
        const _id=req.params.id;
        const deleteStudent=await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(404).send();
        }else{
            res.send(deleteStudent);
        }
        
    }catch(e){
        res.status(500).send(e);
    }
})
router.patch('/students/:id', async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudent= await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudent);
    }catch(e){
        res.status(400).send(e);
    }
})