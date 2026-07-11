const mongoose =require("mongoose");

const dbconnect=async ()=>{
    try {
        return await mongoose.connect(process.env.MONGO_URL)
    }
    catch(err){
        console.log("message :", err)
    }
}
module.exports=dbconnect;