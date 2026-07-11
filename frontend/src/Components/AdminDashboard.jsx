import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from './CartContext';

function AdminDashboard() {
    
    const [item,setItem]=useState({});
    useEffect(()=>{
        fetchdetails();
    },[])
    const fetchdetails=async ()=>{
        const response=await fetch("https://shoestore-4f06.onrender.com/shoeapp/admin/dashboard",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        const data=await response.json();
        console.log("data",data)
        setItem(data);
    }
  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">

  <h1 className="text-4xl font-bold mb-8">
    Admin Dashboard
  </h1>

  {/* Dashboard Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Products */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-gray-500 text-lg">
        Total Products
      </h2>

      <h1 className="text-4xl font-bold mt-3 text-blue-600">
        {item.totalProducts}
      </h1>

     
    </div>

    {/* Orders */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-gray-500 text-lg">
        Total Orders
      </h2>

      <h1 className="text-4xl font-bold mt-3 text-purple-600">
        {item.totalOrders}
      </h1>
        <p className="text-green-600 mt-2">
  Live Data
</p>    
     
    </div>

    {/* Users */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-gray-500 text-lg">
        Total Users
      </h2>

      <h1 className="text-4xl font-bold mt-3 text-orange-600">
        {item.totalUsers}
      </h1>

      
    </div>

    {/* Revenue */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-gray-500 text-lg">
        Total Revenue
      </h2>

      <h1 className="text-4xl font-bold mt-3 text-green-600">
        ₹{item.totalRevenue}
      </h1>
        <p className="text-gray-500 mt-2">
            Updated just now
        </p>
    </div>

  </div>

  {/* Recent Orders */}
  <div className="bg-white rounded-xl shadow-md mt-10 p-6">

    <h2 className="text-2xl font-bold mb-6">
      Recent Orders
    </h2>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="border-b">
          
          <tr>
            <th className="text-left py-3">Order ID</th>
            <th className="text-left py-3">Customer</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Status</th>
          </tr>
           
        </thead>

        <tbody>
             { item.recentOrders?.map((order)=>(
          <tr className="border-b" key={order._id}>
            <td className="py-4">#{order._id.slice(-6)}</td>
            <td className="capitalize" >{order.name}</td>
            <td className="font-semibold text-green-600">₹{order.grandTotal}</td>

            <td>
              <span className={`${
                        order.status==="Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status==="Processing"
                        ? "bg-blue-100 text-blue-700"
                        : order.status==="Shipped"
                        ? "bg-purple-100 text-purple-700"
                        : order.status==="Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        } px-3 py-1 rounded-full`}>
                {order.status}
              </span>
            </td>
          </tr>
             ))}
            
        </tbody>

      </table>

    </div>

  </div>

</div>
    </>
  )
}

export default AdminDashboard
