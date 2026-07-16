const jwt=require("jsonwebtoken");
const userSchema=require("../Models/userModel")
const isLoggedIn=async (req,res,next)=>{
    const token=req.header("authorization");
    if(!token){
        return res.status(401).json({
            Message:" token not found"
        });
    }
    const decoded= jwt.verify(token,"secret");
    const user=await userSchema.findById(decoded.id);
    if(!user){
        return res.status(401).json({
                message: "User not found"
            });
    }

    req.user=user;
    next();
}
module.exports=isLoggedIn;