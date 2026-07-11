import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
function AdminAllProducts() {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetchProducts();
    },[])
    const fetchProducts=async ()=>{
      setLoading(true);
        const response =await fetch("https://shoestore-4f06.onrender.com/shoeapp/admin/allproducts",{
          credentials: "include",
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        const data =await response.json();
        
        setProduct(data);
        setLoading(false);
        console.log("admin",data);
    }
    const deleteHandle=async (id)=>{
      const response=await fetch(`https://shoestore-4f06.onrender.com/shoeapp/admin/deleteproduct/${id}`,{
        method:"DELETE",
        credentials: "include",
        headers:{
          Authorization:localStorage.getItem("token")
        }

      });
      const data=await response.json();
      fetchProducts();

    }
    if(loading){
      return <LoadingSpinner/>
    }
  return (
  <>
    <div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">
        All Products
      </h1>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {/* Product Card */}
      {product.map((item)=>(
      <div className="bg-white rounded-xl shadow-md overflow-hidden" key={item._id}>

        <img
          src={item.image}
          alt=""
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-500 mt-1">
            {item.brand}
          </p>

          <p className="mt-2">
            <span className="font-semibold">
              Category :
            </span>
            {item.category}
          </p>

          <p className="text-blue-600 text-xl font-bold mt-3">
            ₹{item.price}
          </p>

          <div className="flex gap-3 mt-6">

            <button className="flex-1 bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600" 
            onClick={()=>navigate(`/edit-product/${item._id}`)}>
              Edit
            </button>

            <button className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700" 
            onClick={()=>deleteHandle(item._id)}>
              Delete
            </button >

          </div>

        </div>

      </div>
     ))}
      {/* Product Card End */}
        
    </div>

  </div>
</div>
  </>
  )
}

export default AdminAllProducts
