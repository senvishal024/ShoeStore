const adminIsLoggedIn=(req,res,next)=>{
    console.log("REQ USER:", req.user);
     if(!req.user){

        return res.status(401).json({
            message:"Login Required"
        });
    }
    console.log("ROLE:", req.user.role);
    console.log("ADMIN",req.user)
    if(req.user.role !== "admin"){
        return res.status(403).json({
            message:"Admin Access Only"
        });
    }

    next();

}
module.exports=adminIsLoggedIn