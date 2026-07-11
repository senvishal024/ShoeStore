import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function OrderComponent() {
  const navigate=useNavigate();
  const [order,setOrder]=useState([]);
  useEffect(()=>{
    fetchOrders();
  },[])
  const fetchOrders=async ()=>{
    const response =await fetch("https://shoestore-4f06.onrender.com/shoeapp/showorders",
      {
        credentials: "include",
        headers:{
          Authorization:localStorage.getItem("token")
        }
      }
    );
    const data=await response.json();
    setOrder(data);
  }
  if(order.length===0){
  return(
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F1DE] to-[#EFE8D2]">

    <div className="text-7xl mb-6">📦</div>

    <h1 className="text-4xl font-bold text-[#4E220F]">
        No Orders Yet
    </h1>

    <p className="text-[#9D6638] mt-3">
        Looks like you haven't placed any orders yet.
    </p>

    <button
        onClick={() => navigate("/")}
        className="mt-8 bg-[#4E220F] text-white px-8 py-3 rounded-xl hover:bg-[#9D6638] transition"
    >
        Continue Shopping
    </button>
</div>
  )
}
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#F7F1DE] to-[#EFE8D2] py-12">
                      <button     
                          onClick={()=>navigate("/")}
                            className="absolute top-20   left-8 items-center font-semibold text-[#4E220F] hover:text-[#9D6638] transition-all duration-300 "
                      >
                           <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4E220F] hover:bg-[#4E220F] hover:text-white transition">
                              <FaArrowLeft className="text-sm" />
                          </span>  
                      </button> 
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="text-center mb-12">
    <h1 className="text-5xl font-extrabold text-[#4E220F]">
        My Orders
    </h1>

    <p className="text-[#9D6638] mt-3 text-lg">
        Track all your purchases
    </p>
</div>
     {order.map((item)=>(
    <div className="bg-white border border-[#D7C7AE] rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl transition duration-300" key={item._id}>

      {/* Order Header */}
    
      <div className="flex justify-between items-center mb-4">
         <div >
           <h2 className="text-2xl font-bold text-[#4E220F]">
             Order #{item._id.slice(-6)}
           </h2>
           <p className="text-[#9D6638] mt-1">
             {new Date(item.createdAt).toLocaleDateString()}
           </p>
         </div>

         <span className="px-5 py-2 rounded-full bg-[#EFE8D2] text-[#4E220F] font-semibold border border-[#D7C7AE]">
            {item.status}
        </span>
       </div><hr className="mb-4" />

      {/* Product */}
      <div className='flex flex-col gap-4'>
      { item.products.map((product)=>(
      <div className="flex items-center gap-8 py-4 border-b border-[#E8DDC7] last:border-b-0" key={product.productId._id}>
        <img
          src={product.productId.image}
          alt=""
          className="w-28 h-28 rounded-2xl object-cover border border-[#D7C7AE]"
        />

        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#4E220F]">
            {product.productId.name}
          </h3>

          <p className="text-[#9D6638]">
            Quantity : {product.quantity}
          </p>

          <p className="text-lg font-bold text-[#9D6638]">
            ₹{product.productId.price}
          </p>
        </div>

       <p className="text-2xl font-bold text-[#4E220F]">
          ₹{product.productId.price*product.quantity}
        </p>
      </div>
     
       )) }
       </div>
      <hr className="border-[#D7C7AE] my-6"/>

      {/* Footer */}
      <div className="bg-[#FFFAF2] rounded-2xl border border-[#D7C7AE] p-6 mt-6">
        <div className='flex justify-between'>
        <h3 className="text-l font-bold">
          SubTotal :
        </h3>

        <span className="text-lg font-semibold text-[#4E220F]">
          ₹{item.subtotal}
        </span>
        </div>
         <div className='flex justify-between'>
        <h3 className="text-l font-bold">
          Shipping Amount : 
        </h3>

        <span className="text-lg font-semibold text-[#4E220F]">
          ₹{item.shippingAmount}
        </span>
        </div>
         <div className='flex justify-between'>
        <h3 className="text-l font-bold">
          Tax : 
        </h3>

        <span className="text-lg font-semibold text-[#4E220F]">
          ₹{item.taxAmount}
        </span>
        </div>
        <div className='flex justify-between'>
        <h3 className="text-3xl font-extrabold text-[#9D6638]">
          Total Amount
        </h3>

        <p className="text-3xl font-bold text-[#4E220F]">
          ₹{item.grandTotal}
        </p>
        </div>
        
      </div>

    </div>
     ))}

  </div>
</div>
</>
  )
  
}

export default OrderComponent
