const jwt=require("jsonwebtoken");
const isLoggedIn=(req,res,next)=>{
    const token=req.header("authorization");
    if(!token){
        return res.status(401).json({
            Message:" token not found"
        });
    }
    const decoded= jwt.verify(token,"secret");
    req.user=decoded;
    next();
}
module.exports=isLoggedIn;