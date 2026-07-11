import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { FaHeart,FaRegHeart } from 'react-icons/fa';
import WishlistSkeleton from './WishlistSkeleton';
import { useNavigate } from 'react-router-dom';

function WishlistComponet() {
  const [loading,setLoading]=useState(true)
   const [wishlist,setWishlist]=useState([]);
   const navigate=useNavigate()
    useEffect(()=>{
        
        fetchWishlist();
       
    },[])
   
   
    const addWishlist =async (id)=>{
      const response=await fetch(`http://localhost:5000/shoeapp/add-wishlist/${id}`,{
        method:"POST",
        headers:{
          Authorization:localStorage.getItem("token")||""
        }
      });
      const data=await response.json();
      fetchWishlist();
    }

    const fetchWishlist=async ()=>{
      setLoading(true)
        const response=await fetch("http://localhost:5000/shoeapp/show-wishlist",{
            headers:{
                Authorization:localStorage.getItem("token")||""
        }}
        );
        if (!response.ok) {
    return;
}

        const data=await response.json();
        setWishlist(data);
        console.log("wishlist",data)
        setLoading(false)
        
    }
     if(loading){
      return <WishlistSkeleton/>
    }
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">

  {/* Heading */}
   <div className="mb-10 relative w-full bg-cover bg-center min-h-[420px] md:min-h-[520px] flex flex-col"  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1699973056873-3ae919cfec4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMHNob2UlMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D')",
  }}>
    <div className="absolute inset-0 bg-black/40 flex flex-col  items-center justify-center px-6 text-center">
        <p className="text-[#D8B98A] uppercase tracking-[4px] text-center font-semibold">
          FAVORITES
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fff] mt-2">
        Wishlist Cart
        </h1>

        <p className="text-center text-gray-200 mt-3">
         Discover the pairs you've chosen to keep.
        </p>
        </div >
        </div>

  {/* Wishlist Grid */}
  <div className="
    grid
    grid-cols-2
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-2
    sm:gap-4
    ">

    {/* Card */}
    {wishlist.map((item)=>(
    <div         className="
        bg-white
        overflow-hidden
        shadow-md
        hover:shadow-md
       hover:dark:shadow-black/50 
        hover:-translate-y-0.5
        transition-all
        duration-300
        cursor-pointer
        group
        " key={item._id}>

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={item.productId.image}
          alt=""
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Remove Wishlist */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition" onClick={(e)=>{
          e.stopPropagation();
          addWishlist(item.productId._id);
        }}>
          
             <FaHeart className="text-red-500 text-xl" />
           
        </button>

      </div>

      {/* Content */}
      <div className="p-5">

        <p className="text-[#9D6638] text-sm font-medium">
          {item.productId.brand}
        </p>

        <h2 className="text-xl font-bold text-[#4E220F] mt-1">
          {item.productId.name}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {item.productId.category} Shoes
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-2xl font-bold text-[#9D6638]">
            ₹{item.productId.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {item.productId.averageRating}
          </span>

        </div>

        
      </div>

    </div>
    ))}
  </div>

</section>
    </>
  )
}

export default WishlistComponet
