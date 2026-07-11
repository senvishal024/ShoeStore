const mongoose=require("mongoose");

const reviewSchema= mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    review:{
        type:String,
        required:true
    },
    
},{
    timestamps:true,
})
module.exports=mongoose.model("review",reviewSchema);