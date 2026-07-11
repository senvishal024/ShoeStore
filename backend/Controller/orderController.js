const orderModel = require("../Models/orderModel");
const cartSchema=require("../Models/cartModel")
const OrderSchema= async(req,res)=>{
    const {type,name,email,number,address,city,pincode,subtotal,shippingAmount,taxAmount,grandTotal,products}=req.body;
    const userId=req.user.id;
    const orderDetail= await orderModel.create({
        name,email,number,address,city,pincode,subtotal,shippingAmount,taxAmount,grandTotal,userId,products
    });
    if (type === "cart") {
    await cartSchema.deleteMany({ userId });
}
    res.json({
      success: true,
      orderDetail
    });

}
const ShowOrders=async(req,res)=>{
    const userId=req.user.id;
    const orders= await orderModel.find({userId});
    res.json(orders);
}
const userShowOrders=async (req,res)=>{
    
}
const AdminOrders=async(req,res)=>{
    const orders=await orderModel.find();
    res.json(orders)
}
const StatusUpdate=async (req,res)=>{
    const id=req.params.id;
    const {status}=req.body;
    const statusUpdate=await orderModel.findByIdAndUpdate(id,{status},{new:true})
    res.json(statusUpdate)
}
module.exports={OrderSchema,ShowOrders,AdminOrders,StatusUpdate}