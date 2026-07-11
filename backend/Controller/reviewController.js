const reviewSchema = require("../Models/reviewModel");
const productSchema=require("../Models/product")
const reviewAdd=async (req,res)=>{
    const productId=req.params.id;
    const {rating,review}=req.body;
    const userId=req.user.id;
    const newReview=await reviewSchema.create({
        productId,
        userId,
        rating,
        review
    })
     await productSchema.findByIdAndUpdate(productId,{
        $push:{
            reviews:newReview._id
        }
    })
    res.json(newReview);
}
const showReview=async (req,res)=>{
    const productId=req.params.id;
    const showReview=await reviewSchema.find({productId}).populate("userId","name")
    res.json(showReview);
}
const showRating=async (req,res)=>{
    const showReview=await reviewSchema.find();
    res.json(showReview)
}
module.exports={reviewAdd,showReview,showRating};