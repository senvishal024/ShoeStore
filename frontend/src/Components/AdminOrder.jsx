import React from 'react'
import { useEffect, useState } from "react"

function AdminOrder() {
     const [orders,setOrders]=useState([]);
    const [status,setStatus]=useState({});
    useEffect(()=>{
        fetchOrders();
    },[])
    const fetchOrders=async ()=>{
        const response=await fetch("https://shoestore-4f06.onrender.com/shoeapp/admin/orders",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        });
        const data=await response.json();
        setOrders(data)
       // console.log("data",data)
    }
    const updateStatusHandle=async (id)=>{
      console.log("status",id);
      console.log(status[id])
      const response=await fetch(`https://shoestore-4f06.onrender.com/shoeapp/admin/statusupdate/${id}`,{
        method:"PATCH",
        headers:{
          Authorization:localStorage.getItem("token"),
          "Content-Type":"application/json"
        },
        body:JSON.stringify({status:status[id]})
      })
      const data=await response.json();
      console.log(data);
      fetchOrders();
    }
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Admin Orders Panel
        </h1>

        {/* Order Card */}
        {orders.map((item)=>(
        <div className="bg-white rounded-xl shadow-md p-6 mb-6" key={item._id}>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold">
                Order #{item._id.slice(-6)}
              </h2>

              <p className="text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>

            <span className={`px-4 py-2 rounded-full w-fit ${
                        item.status==="Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.status==="Processing"
                        ? "bg-blue-100 text-blue-700"
                        : item.status==="Shipped"
                        ? "bg-purple-100 text-purple-700"
                        : item.status==="Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}>
              {item.status}
            </span>
          </div>

          <hr className="my-4" />

          {/* Customer Details */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-semibold">Customer Name</h3>
              <p className="text-gray-600">{item.name}</p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">
                {item.email}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">
                {item.number}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">
                {item.address},{item.city},{item.pincode}
              </p>
            </div>
          </div>

          {/* Products */}
          <h3 className="text-lg font-bold mb-4">
            Ordered Products
          </h3>
            {item.products.map((product)=>(
          <div className="space-y-4" key={product._id}>

            <div className="flex items-center gap-4 border rounded-lg p-3"  key={product.productId._id}>
              <img
                src={product.productId.image}
                alt=""
                className="w-20 h-20 bg-gray-200 rounded-lg"
              />

              <div className="flex-1">
                <h4 className="font-semibold">
                  {product.productId.name}
                </h4>

                <p className="text-gray-500">
                  Quantity : {product.quantity}
                </p>

                <p className="text-blue-600 font-semibold">
                  ₹{product.productId.price}
                </p>
              </div>

              <div className="font-bold text-green-600">
                ₹{product.productId.price*product.quantity}
              </div>
            </div>
                   
          </div>
            ))}
          <hr className="my-6" />

          {/* Order Summary */}
          <div className="space-y-2">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{item.subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{item.shippingAmount}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹{item.taxAmount}</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{item.grandTotal}</span>
            </div>

          </div>

          {/* Status Update */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <select className="border p-3 rounded-lg"
            value={status[item._id]||item.status}
            onChange={(e)=>setStatus({
              ...status,
              [item._id]:e.target.value
            })}
            >
              <option value={"Pending"}>Pending</option>
              <option value={"Processing"}>Processing</option>
              <option value={"Shipped"}>Shipped</option>
              <option value={"Delivered"}>Delivered</option>
              <option value={"Cancelled"}>Cancelled</option>
            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" onClick={()=>updateStatusHandle(item._id)}>
              Update Status
            </button>

          </div>

        </div>
            ))}
      </div>
    </div>
        </>
  )
}

export default AdminOrder
