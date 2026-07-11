const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    name:{type:String,
        required:true
    },
    brand:{type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }]
    ,
    quintity:[
        {
            type:Number,
            require:true
        }
    ]
})

module.exports=mongoose.model("product",productSchema);