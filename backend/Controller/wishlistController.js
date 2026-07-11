const product = require("../Models/product");
const wishlistSchema=require("../Models/wishlistModel")
const AddWishlist=async (req,res)=>{
    const productId=req.params.id;
    const userId=req.user.id;
    const existingWishlist=await wishlistSchema.findOne({userId,productId});
    if(existingWishlist){
        const deleteWishlist=await wishlistSchema.findByIdAndDelete(existingWishlist._id);
        return res.json({
    success: true,
    message: "Removed from wishlist"
});
    }
    else{
        const wishlist=await wishlistSchema.create({
        productId,userId})
        return res.json({
    success: true,
    message: "Add in wishlist",
    wishlist
})
    }
    
}
const ShowWishlist=async (req,res)=>{
    const userId=req.user.id;
    const wishlist=await wishlistSchema.find({userId}).populate({path:"productId",populate:{path:"reviews"}});
    const finalWishlist=wishlist.filter(item => item.productId).map((item)=>{
        const product=item.productId;
        const total=product.reviews.reduce((sum,review)=> sum+review.rating,0);
    
        return {
        ...item.toObject(),
        productId:{
            ...product.toObject(),
            averageRating:product.reviews.length>0
            ?(total/product.reviews.length).toFixed(1)
            :0,
            totalReview:product.reviews.length
        }
    }
    })
    
    res.json(finalWishlist )
}
module.exports={AddWishlist,ShowWishlist};