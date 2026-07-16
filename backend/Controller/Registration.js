const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema=require("../Models/userModel");
const registstrationController= async (req,res)=>{
    try{
        const {name,email,password}=req.body;
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
        const verifyemail= await userSchema.findOne({email});
         console.log("User Found:", verifyemail);
        if(!verifyemail){
            return res.json("Email Invalide");
        }

        const verifypass=await bcrypt.compare(password,verifyemail.password);
        if(!verifypass){
           return res.json("Invalid Password");
        }
    
        
        const token = await jwt.sign({id:verifyemail._id},"secret");
        res.json({
            message:"Login successfully",
            token,
            role:verifyemail.role
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
const AdminRegistrtionController=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hashpass=await bcrypt.hash(password,10);
        const role="admin";
        const findemail=await userSchema.findOne({email});
        if(findemail){
            return res.json("Already Registered");
        }
        else{

        const admin=await userSchema.create({
            name,email,password:hashpass,role
        })
       return res.json("Admin registered successfully",admin)
       }
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const AdminLoginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const verifyemail=await userSchema.findOne({email});
        if(!verifyemail){
            return res.json("Email invailed");
        }
        if(verifyemail.role!=="admin"){
            return res.status(403).json({
            message: "Admin access only"
    });
        }
        const verifypass=await bcrypt.compare(password,verifyemail.password);
        if(!verifypass){
            return res.json("Password incorrect");
        }
        const token=await jwt.sign({id:verifyemail._id},"secret");
        res.json({message:"Login successfully", token,role:verifyemail.role});
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }

}

module.exports={registstrationController,loginController,AdminLoginController,AdminRegistrtionController};