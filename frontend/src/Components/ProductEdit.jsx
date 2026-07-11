import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductEdit() {
    const navigate=useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetchProducts();
    },[])
    const fetchProducts=async ()=>{
        const response=await fetch(`http://localhost:5000/shoeapp/admin/edit-product/${id}`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
        });
        const data =await response.json();
        setProduct(data);

    }
    const submitHandle=async (e)=>{
         e.preventDefault();
        console.log(product);
        const response=await fetch(`http://localhost:5000/shoeapp/admin/edit-product/${id}`,{
            method:"PUT",
                headers:{
                    Authorization:localStorage.getItem("token"),
                    "Content-Type":"application/json"
                },
            body:JSON.stringify(product)
        })
        const data =await response.json();
        console.log(data);
        navigate("/all-products");
    }
  return (
    <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">

    <h1 className="text-3xl font-bold text-center mb-8">
      Edit Product
    </h1>

    <form className="space-y-5" onSubmit={submitHandle}>

      {/* Product Name */}
      <div>
        <label className="block mb-2 font-semibold">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          value={product.name||""}
          onChange={(e)=>setProduct({
            ...product,
            name:e.target.value
          })}
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block mb-2 font-semibold">
          Brand
        </label>
        <input
          type="text"
          placeholder="Enter Brand Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          value={product.brand||""
          }
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

        <select className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500" value={product.category||""}
        onChange={(e)=>setProduct({
            ...product,
            category:e.target.value
        })}>
          <option value="Running">Running</option>
          <option value="Casual">Casual</option>
          <option value="Sports">Sports</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Formal">Formal</option>
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
          value={product.price||""}
          onChange={(e)=>setProduct({
            ...product,
            price:e.target.value
          })}
        />
      </div>

      {/* Image */}
      <div>
        <label className="block mb-2 font-semibold">
          Image URL
        </label>
        <input
          type="text"
          placeholder="Paste Image URL"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          value={product.image||""}
          onChange={(e)=>setProduct({
            ...product,
            image:e.target.value
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
          value={product.discription||""}
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
      {/* Buttons */}
      <div className="flex gap-4">

        <button
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          type='submit'
        >
          Update Product
        </button>

        <button
          type="button"
          className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
          onClick={()=>navigate(-1)}
        >
          Cancel
        </button>

      </div>

    </form>

  </div>
</div>
    </>
  )
}

export default ProductEdit
