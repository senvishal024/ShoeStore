const adminIsLoggedIn=(req,res,next)=>{
     if(!req.user){

        return res.status(401).json({
            message:"Login Required"
        });
    }
    console.log("ADMIN",req.user)
    if(req.user.role !== "admin"){
        return res.status(403).json({
            message:"Admin Access Only"
        });
    }

    next();

}
module.exports=adminIsLoggedIn