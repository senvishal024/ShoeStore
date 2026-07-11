import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHeart,FaRegHeart } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import ProductSkeleton from "./ProductSkeleton";
import toast from "react-hot-toast";
function ProductCard({search,sort,category}) {
  const Navigate=useNavigate();
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    fetchProducts();
  }, [search,sort,category]);

    const addWishlist=async (id)=>{
      const token =localStorage.getItem("token");
      console.log("token",token)
      if(token){

      const response =await fetch(`http://localhost:5000/shoeapp/add-wishlist/${id}`,{
        method:"POST",
        credentials: "include",
        headers:{
          Authorization:localStorage.getItem("token")
        }
      });
      const data=await response.json();
      fetchProducts();
    }
    else{
        alert("Please Login first");
    }
    }

  
  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(
      `https://shoestore-4f06.onrender.com/shoeapp/show-products?search=${search}&sort=${sort}&category=${category}`,
      {
        credentials: "include",
        headers: {
          Authorization: localStorage.getItem("token")||""
        },
      }
    );
    console.log(search, sort, category);
    const data = await response.json();
    console.log("products",data);
console.log(Array.isArray(data));
   
    setProducts(data);
     setLoading(false);
  };
  
  return (
   <div className="max-w-7xl mx-auto px-3 sm:px-5 py-8">

  <div
    className="
    grid
    grid-cols-2
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-2
    sm:gap-4
    "
  >

    {products.map((item) => (

      <div
        key={item._id}
        className="
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
        "
        onClick={() =>
          Navigate(`/product-detail/${item._id}`)
        }
      >


        {/* Image Section */}
        <div className="relative overflow-hidden">


          <img
            src={item.image}
            alt={item.name}
            className="
            w-full
            h-40
            sm:h-64
            object-contain
            bg-gray-50
            group-hover:scale-110
            transition-transform
            duration-500
            "
          />



          {/* Wishlist */}

          <button
            onClick={(e)=>{
              e.stopPropagation();
              addWishlist(item._id);
            }}
            className="
            absolute
            top-2
            right-2
            sm:top-3
            sm:right-3
            bg-white/90
            backdrop-blur-md
            rounded-full
            p-2
            shadow-md
            hover:scale-110
            transition
            "
          >

            {
              item.isWishlist ?
              <FaHeart className="text-red-500 text-lg sm:text-xl"/>
              :
              <FaRegHeart className="text-gray-500 text-lg sm:text-xl"/>
            }

          </button>




          {/* Featured */}

          {
            item.featured &&

            <span
              className="
              absolute
              top-2
              left-2
              sm:top-3
              sm:left-3
              bg-[#9D6638]
              text-white
              px-2
              sm:px-3
              py-1
              rounded-full
              text-[10px]
              sm:text-xs
              font-semibold
              "
            >
              Featured
            </span>

          }


        </div>






        {/* Content */}

        <div className="p-3 sm:p-5">


          <p
            className="
            text-xs
            sm:text-sm
            text-[#9D6638]
            font-medium
            "
          >
            {item.brand}
          </p>



          <h2
            className="
            text-sm
            sm:text-xl
            font-bold
            text-[#4E220F]
            line-clamp-1
            "
          >
            {item.name}
          </h2>



          <p
            className="
            text-gray-500
            text-xs
            sm:text-sm
            mt-1
            "
          >
            {item.category}
          </p>





          {/* Price + Rating */}

          <div
            className="
            flex
            justify-between
            items-center
            mt-3
            sm:mt-4
            "
          >

            <p
              className="
              text-lg
              sm:text-2xl
              font-bold
              text-[#9D6638]
              "
            >
              ₹{item.price}
            </p>


            <span
              className="
              text-yellow-500
              text-xs
              sm:text-base
              "
            >
              ⭐ {item.averageRating}
            </span>


          </div>






          {/* Buttons */}

          <div
            className="
            flex
            gap-2
            sm:gap-3
            mt-4
            sm:mt-5
            "
          >

          


              


          </div>


        </div>


      </div>

    ))}

  </div>

</div>
  );
}

export default ProductCard;