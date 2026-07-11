const mongoose=require("mongoose")
const Product = require("./product");
const cartSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
})
module.exports=mongoose.model("cart",cartSchema);