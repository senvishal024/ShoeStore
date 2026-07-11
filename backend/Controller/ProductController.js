const orderModel = require("../Models/orderModel");
const product = require("../Models/product");
const productSchema=require("../Models/product");
const userSchema=require("../Models/userModel");
const wishlistSchema=require("../Models/wishlistModel");

const AddProduct=async (req,res)=>{
    const {name,brand,price,category,image,discription,featured}=req.body;
    const products=await productSchema.create({
        name,brand,price,category,image,discription,featured
    });
    return res.json({message:"Product Add successfully",products})
}
const featuredProduct=async (req,res)=>{
    const featured=await productSchema.find({featured:true}).limit(8);
    res.json(featured);
}
const ShowProductsHome=async (req,res)=>{
    const {category}=req.query;
    const products=await productSchema.find({category}).limit(8);
    res.json(products);
}
const ShowProducts=async (req,res)=>{
    const search=req.query.search || "";
    const sort=req.query.sort || "";
    const category=req.query.category ||"";
    const userId=req.user?.id;
   
    let query={
          name:{
            $regex:search,
            $options:"i"
        }
    }
     if(category!==""){
        query.category=category;
    }
    let sortoption={};
    if(sort==="lowtohigh"){
        sortoption={
            price:1
        }
    }
    else if(sort==="hightolow"){
        sortoption={
            price:-1
        }
    }
    else if(sort==="atoz"){
        sortoption={
            name:1
        }
    }
    else if(sort==="ztoa"){
        sortoption={
            name:-1
        }
    }
    const products= await productSchema.find(query).sort(sortoption).populate("reviews");
    let wishlist = [];
    if(userId){
        wishlist=await wishlistSchema.find({userId});
    }
    
    const wishlistIds=new Set (wishlist.map(item => item.productId.toString()));

    const finalProduct=products.map((product) => {
    const total=product.reviews.reduce((sum,review) => sum+  review.rating,0);
 return {
    ...product.toObject(),
    averageRating:
      product.reviews.length > 0
        ? (total / product.reviews.length).toFixed(1)
        : 0,
    totalReviews: product.reviews.length,
    isWishlist:wishlistIds.has(product._id.toString())
  };
   });
    return res.json(finalProduct);
}
const ShowProductsDetail=async (req,res)=>{
    try{
    const id=req.params.id;
    const detail=await productSchema.findOne({_id:id});
    return res.json(detail);
    }
    catch(err){
        res.json({
            message:"Error",
            error:err.message
        })
    }
}
const DeleteProduct=async (req,res)=>{
    const id=req.params.id;
    const deleteItem=await productSchema.findByIdAndDelete(id);
    res.json(deleteItem);
}
const EditProduct=async (req,res)=>{
    const product=req.body;
    const id =req.params.id;
    const editItem=await productSchema.findByIdAndUpdate(id,product,{new:true});
    res.json(editItem);
}
const Dashboard=async (req,res)=>{
    const totalProducts=await productSchema.countDocuments();
    const totalOrders=await orderModel.countDocuments();
    const totalUsers=await userSchema.countDocuments();
    const orders=await orderModel.find();
    let totalRevenue=0;
    orders.forEach((order) => {
        totalRevenue +=order.grandTotal
    });
    const recentOrders=await orderModel.find()
    .sort({createdAt:-1})
    .limit(5)
    res.json({totalProducts,totalOrders,totalUsers,totalRevenue,recentOrders})
}

module.exports={AddProduct,ShowProductsHome,ShowProducts,ShowProductsDetail,DeleteProduct,EditProduct,Dashboard,featuredProduct};