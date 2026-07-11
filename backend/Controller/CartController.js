
const cartSchema=require("../Models/cartModel")
const CartAdd =async (req,res)=>{
    const productId=req.params.id;
    const userId=req.user.id;
    const existingItem=await cartSchema.findOne({userId,productId})
    if(existingItem){
        existingItem.quantity +=1
        await existingItem.save();
        return res.json(existingItem);
    }
    else{

    
    console.log(req.user);
console.log(req.user._id);
    const cart=await cartSchema.create({
        productId,
        userId,
    })
    return res.json(cart);
}
}
const CartShow=async (req,res)=>{
    const userId=req.user.id;
    const cart =await cartSchema.find({userId})
    .populate("productId")
    return res.json(cart);
}
const CartDecrease=async (req,res)=>{
    const cartId=req.params.id;
    const cart=await cartSchema.findById(cartId);
    if(cart){
        if(cart.quantity>1){
            cart.quantity-=1;
            await cart.save()
            return res.json(cart)
        }
        else{
            const deleteCart=await cartSchema.findByIdAndDelete(cartId);
            return res.json(deleteCart)
        }
        
    }
}
const CartIncrease=async (req,res) => {
    const cartId =req.params.id;
    const cart=await cartSchema.findById(cartId);
    if(cart){
        cart.quantity+=1;   
        await cart.save();
        return res.json(cart)
    }
}
const CartDelete=async (req,res)=>{
    const cartId=req.params.id;
    const cart=await cartSchema.findByIdAndDelete(cartId);
    res.json(cart);
}
module.exports={CartAdd,CartShow,CartDecrease,CartIncrease,CartDelete};