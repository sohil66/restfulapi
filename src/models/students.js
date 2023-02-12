const mongoose=require("mongoose")
const validator=require("validator")
const studentSchema=new mongoose.Schema({
    task:{
        type: String,
        required:true,
        minlength:3
    },
    
    is_completed:{
        type:String,
        required:true,
        
        
    },
    
    end_date:{
        type:String,
        required:true
    }
    
})
const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;