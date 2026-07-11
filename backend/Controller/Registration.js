const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema=require("../Models/userModel");
const registstrationController= async (req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        const hashpass=await bcrypt.hash(password,10);
        const findemail=await userSchema.findOne({email});
        if(findemail){
           return res.json("Already Registered");
        }
    else{
        const user=await userSchema.create({
         name,
         email,
         password:hashpass,
         role
         });
         return res.json({
   message: "User Registered Successfully",
   user
});
        }  
        
    }
    catch(err){
        res.json({message:"Error",
            error:err.message
        })
    }
    
}
const loginController =async(req,res)=>{
    try{
        const {email,password,role}=req.body;
         console.log("Frontend Email:", email);
        console.log("Frontend Role:", role);
        const verifyemail= await userSchema.findOne({email});
         console.log("User Found:", verifyemail);
        if(!verifyemail){
            return res.json("Email Invalide");
        }
        console.log("DB Role:", verifyemail.role);

        const verifypass=await bcrypt.compare(password,verifyemail.password);
        if(!verifypass){
           return res.json("Invalid Password");
        }
        if(verifyemail.role !== role){
            return res.json({
                message:"Invalid Role"
            })
        }
        const token = await jwt.sign({id:verifyemail._id,
            role:verifyemail.role},"secret");
        res.json({
            message:"Login successfully",
            token,role:verifyemail.role
        })
        console.log(token)

    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}

module.exports={registstrationController,loginController}