import { cartContext } from "./CartContext";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
function CheckoutComponent(){
  const navigate=useNavigate();
  const location=useLocation();
  const {type,product}=location.state||{}
  const {cart,fetchProducts,grandTotal,subTotal,shippingAmount,taxAmount}=useContext(cartContext);
  
  const [data,setData]=useState({name:"",email:"",number:"",address:"",city:"",pincode:""});
  let buyNowSubtotal = 0;
let buyNowTax = 0;
let buyNowGrandTotal = 0;

if (type === "buyNow" && product) {
  buyNowSubtotal = product.productId.price * product.quantity;
  buyNowTax = (buyNowSubtotal * 3) / 100;
  buyNowGrandTotal = buyNowSubtotal + buyNowTax;
}

  const placeOrderHandle=async ()=>{
    console.log(data)
    if(data.name==""||data.email==""||data.number==""||data.address==""||data.city==""||data.pincode==""){
      console.log("please fill all fields")
      return alert("Please fill all fields");
    }

    if(data.number.length!==10){

      return alert("Please enter vailed phone number")
    }
    if(data.pincode.length!=6){
      return alert("Please enter vailed Pincode")
    }
    const orderData=type ==="buyNow"
    ?{
      type:"buyNow",
      ...data,
      products:[product],
      grandTotal:buyNowGrandTotal,
      subtotal:buyNowSubtotal,
      shippingAmount,
      taxAmount:buyNowTax
      
    }:{
      type:"cart",
      ...data,
        products:cart,
        grandTotal,
        subtotal:subTotal,
        shippingAmount,
        taxAmount,
    }

    const response=await fetch("http://localhost:5000/shoeapp/order",{
      method:"POST",
      headers:{
        Authorization:localStorage.getItem("token"),
        "Content-Type":"application/json"
      },
      body:JSON.stringify(orderData)
    });
    const order=await response.json();
    setData();
    navigate("/order");
  }
  

    return(
        <>
      <div className="min-h-screen bg-gradient-to-br from-[#F7F1DE] to-[#EFE8D2] py-14 px-5">
        <button     
                            onClick={()=>navigate(-1)}
                              className="absolute top-20   left-8 items-center font-semibold text-[#4E220F] hover:text-[#9D6638] transition-all duration-300 "
                        >
                             <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4E220F] hover:bg-[#4E220F] hover:text-white transition">
                                <FaArrowLeft className="text-sm" />
                            </span>  
                        </button> 
                      
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#4E220F]">
              Checkout
          </h1>

          <p className="text-[#9D6638] mt-3 text-lg">
              Complete your order securely
          </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Shipping Details */}
        <div className="bg-white border border-[#D7C7AE] rounded-3xl shadow-xl p-8  ">
          <h2 className="text-2xl font-bold mb-6">
            Shipping Details
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              value={data.name}
              placeholder="Full Name"
             className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
              onChange={(e)=>setData({
                ...data,
                name:e.target.value})}
            />

            <input
              type="email"
              value={data.email}
              placeholder="Email Address"
              className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
              onChange={(e)=>setData({
                ...data,
                email:e.target.value})}
            />

            <input
              type="number"
              placeholder="Phone Number"
              value={data.number}
              className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
              onChange={(e)=>setData({
                ...data,
                number:e.target.value
              })}
            />

            <textarea
              placeholder="Delivery Address"
              rows="4"
              className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
              value={data.address}
              onChange={(e)=>setData({
                ...data,
                address:e.target.value
              })}
            ></textarea>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
                value={data.city}
                onChange={(e)=>setData({
                  ...data,
                  city:e.target.value
                })}
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full border border-[#D7C7AE] bg-[#FFFDF8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9D6638] transition"
                value={data.pincode}
                onChange={(e)=>setData({
                  ...data,
                  pincode:e.target.value
                })}
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}

        {type==="buyNow" ?(
          <div className="bg-white border border-[#D7C7AE] rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-[#4E220F] mb-8">
              Order Summary
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between text-lg py-2 text-red-700">
              <span>Subtotal</span>
              <span>₹{buyNowSubtotal}</span>
            </div>

            <div className="flex justify-between text-lg py-2 text-gray-700">
              <span>Shipping</span>
              <span>₹{shippingAmount} </span>
            </div>
            <div className="flex justify-between text-lg py-2 text-gray-700">
              <span>Tax 3%</span>
              <span>₹{buyNowTax} </span>
            </div>
            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{buyNowGrandTotal}</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-[#4E220F] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#9D6638] transition-all duration-300 shadow-lg" onClick={placeOrderHandle}>
            Place Order
          </button >
        </div>
        ) :
        (

        <div className="bg-white border border-[#D7C7AE] rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between text-lg py-2 text-gray-700">
              <span>Subtotal</span>
              <span>₹{subTotal}</span>
            </div>

            <div className="flex justify-between text-lg py-2 text-gray-700">
              <span>Shipping</span>
              <span>₹{shippingAmount} </span>
            </div>
             <div className="flex justify-between text-lg py-2 text-gray-700">
              <span>Tax 3%</span>
              <span>₹{taxAmount} </span>
            </div>
           <hr className="border-[#D7C7AE] my-4"/>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-[#4E220F] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#9D6638] transition-all duration-300 shadow-lg" onClick={placeOrderHandle}>
            Place Order
          </button >
        </div>
    )}

      </div>
    </div>
    
        </>
    )
}
export default CheckoutComponent