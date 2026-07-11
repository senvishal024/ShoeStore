import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetailComponent({setCategory}){

 /*  fetch details of products */
  const [details,setDetails]=useState({});
  const navigate=useNavigate();
    const{id}=useParams();
  useEffect(()=>{
    fetchdetails()
  },[id])
  const fetchdetails=async ()=>{
  
    const response=await fetch(`http://localhost:5000/shoeapp/show-product-detail/${id}`,{
      credentials: "include",
      headers:{
        Authorization:null
      }
    });
    const data=await response.json();
    setDetails(data);

       setCategory(data.category)
       console.log("product details",data)
    }
    
    /* add to cart function */
    const addToCartHandle=async ()=>{
      console.log("add to cart click")
      const token=localStorage.getItem("token");
      if(!token){
        const isconfirmed=confirm("please login first ")
        if(isconfirmed){
           return navigate("/login")
        }
       else{
        return navigate(`/product-detail/${id}`)
       }
      }
      else{
      const response=await fetch(`https://shoestore-4f06.onrender.com/shoeapp/add-cart/${id}`,{
        method:"POST",
        credentials: "include",
        headers:{
          Authorization:localStorage.getItem("token")
        }
      });
      const data =await response.json();
      toast.success("login succesfully")
      }
  }
    return(
        <>
        <div className="min-h-screen  py-28">
        <button     
                    onClick={()=>navigate(-1)}
                      className="absolute top-20   left-8 items-center font-semibold text-[#4E220F] hover:text-[#9D6638] transition-all duration-300 "
                >
                     <span className="w-10 h-10 flex items-center justify-center rounded-full border border-[#4E220F] hover:bg-[#4E220F] hover:text-white transition">
                        <FaArrowLeft className="text-sm" />
                    </span>  
                </button> 
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
      
        {/* Product Image */}
       <div className=" border-2 h-[650px] flex items-center justify-center p-10 overflow-hidden">
  <img
    src={details.image}
    alt={details.name}
    className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
  />
</div>


        {/* Product Information */}
        <div>
          <h1 className="text-6xl leading-tight font-bold text-[#4E220F]">
            {details.name}
          </h1>

          <p className="text-[#9D6638] text-lg mt-2 font-medium">
            {details.category}
          </p>

          <p className="text-5xl font-bold text-[#4e220f] mt-8">
           ₹ {details.price} <span className="text-xl px-4 line-through">3000</span>
          </p>

          <div className="mt-4">
            <span className="bg-[#B0BA99] text-[#4E220F] px-4 py-2 rounded-full font-semibold">
              In Stock
            </span>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-[#4E220F] mt-10 mb-4">
              Description
            </h2>

            <p className="text-gray-600 leading-relaxed">
             {details.discription}
            </p>
          </div>

          <div className="mt-10 border-t border-[#B0BA99] pt-8">
            <h2 className="text-2xl font-bold text-[#4E220F] mb-4">
              Product Details
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li className="flex justify-between border-b border-[#B0BA99] pb-3"><strong className="font-semibold text-[#4E220F]">Brand:</strong> {details.brand}</li>
              <li className="flex justify-between border-b border-[#B0BA99] pb-3"><strong className="font-semibold text-[#4E220F]">Category:</strong>{details.category}</li>
              <li className="flex justify-between border-b border-[#B0BA99] pb-3"><strong className="font-semibold text-[#4E220F]">Color:</strong> Red</li>
              <li className="flex justify-between border-b border-[#B0BA99] pb-3"><strong className="font-semibold text-[#4E220F]">Size:</strong>  
              <div className="flex gap-2">
                <button className="shadow-md hover:shadow-md  hover:dark:shadow-black/50  px-4 py-2 rounded-md border-2 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                  6
                </button>
                <button className="shadow-md hover:shadow-md  hover:dark:shadow-black/50  p-2 rounded-md border-2 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                  6
                </button>
                <button className="shadow-md hover:shadow-md  hover:dark:shadow-black/50  p-2 rounded-md border-2 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                  6
                </button>
                <button className="shadow-md hover:shadow-md  hover:dark:shadow-black/50  p-2 rounded-md border-2 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                  6
                </button>
                 </div>
                </li>
               
            </ul>
          </div>

          <div className="flex gap-5 mt-12">
            <button className="flex-1 bg-[#4E220F] hover:bg-[#9D6638] text-white py-4 rounded-xl transition" 
            onClick={addToCartHandle}
            >
              Add To Cart
            </button>

            <button className="flex-1 border-2 border-[#4E220F] text-[#4E220F] py-4 rounded-xl hover:bg-[#4E220F] hover:text-white transition" onClick={()=>navigate("/checkout",{
                    state:{
                      type:"buyNow",
                      product:{
                        productId:details,
                        quantity:1
                      }
                    }
                  })}>
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
        </>
    )
}
export default ProductDetailComponent