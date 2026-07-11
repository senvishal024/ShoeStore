import React, { useState } from 'react'

function AddProducts() {
    const [product,setProduct]=useState({featured:false});
    const AddProductHandle=async (e)=>{
      e.preventDefault();

       console.log("Sending:", product);
        console.log("JSON:", JSON.stringify(product));
      
        const response=await fetch("https://shoestore-4f06.onrender.com/shoeapp/admin/add-products",{
            method:"POST",
            credentials: "include",
            headers:{
                "Content-Type":"application/json",
                Authorization: localStorage.getItem("token")
            },
            body:JSON.stringify(product)
        })
        const data=await response.json();
        console.log("data",data);
    }
  return (
   <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">

    <h1 className="text-3xl font-bold text-center mb-8">
      Add New Product
    </h1>

    <form className="space-y-5">

      {/* Product Name */}
      <div>
        <label className="block mb-2 font-semibold">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setProduct({
            ...product,
            name:e.target.value
          })}
        />
      </div>
      <h1>{product.name}</h1>

      {/* Brand */}
      <div>
        <label className="block mb-2 font-semibold">
          Brand
        </label>
        <input
          type="text"
          placeholder="Enter Brand Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setProduct({
            ...product,
            brand:e.target.value
          })}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2 font-semibold">
          Category
        </label>

        <select className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setProduct({
            ...product,
            category:e.target.value
        })}>
          <option>Select Category</option>
          <option value={"Running"}>Running</option>
          <option value={"Casual"}>Casual</option>
          <option value={"Sports"}>Sports</option>
          <option value={"Sneakers"}>Sneakers</option>
          <option value={"Formal"}>Formal</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block mb-2 font-semibold">
          Price
        </label>
        <input
          type="number"
          placeholder="Enter Product Price"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>setProduct({
            ...product,
            price:e.target.value
        })}

        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block mb-2 font-semibold">
          Image URL
        </label>
        <input
          type="text"
          placeholder="Paste Image URL"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setProduct({
            ...product,
            image:e.target.value
          })}
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold">
          Quintity
        </label>
        <input
          type="text"
          placeholder="Paste Image URL"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setProduct({
            ...product,
            quintity:e.target.value
          })}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-semibold">
          Description
        </label>

        <textarea
          rows="5"
          placeholder="Enter Product Description"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e)=>setProduct({
            ...product,
            discription:e.target.value
          })}
        ></textarea>
      </div>
        <div className='flex gap-5'>
           <input
            type="checkbox"
            id="featured"
            checked={product.featured}
          onChange={(e) => setProduct({
            ...product,
            featured:e.target.checked
          })}
            />

          <label htmlFor="featured">
            Featured Product
          </label>
        </div>
      {/* Button */}
      <button
        
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={()=>AddProductHandle()}
      >
        Add Product
      </button>

    </form>

  </div>
</div>
   </>
  )
}

export default AddProducts
