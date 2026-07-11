import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FeaturedProduct() {

  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://shoestore-4f06.onrender.com/shoeapp/featured-products",
      {
        headers: {
          Authorization: null,
        },
      }
    );

    const data = await response.json();
    setProducts(data);
  };


  return (
    <>

      {/* Heading */}
      <section className="py-12 md:py-16 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4E220F]">
            Featured Collection
          </h2>

          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            Discover our best shoes.
          </p>

        </div>
      </section>


      {/* Cards */}

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
          py-4
        ">


          {products.map((item)=>(

            <div
              key={item._id}
              onClick={()=>Navigate(`/product-detail/${item._id}`)}
              className="w-[220px]
              sm:w-[260px]
              md:w-[300px] flex-shrink-0
             bg-white overflow-hidden cursor-pointer group transition-all shadow-md  hover:dark:shadow-black/50  duration-300 hover:shadow-lg  hover:-translate-y-0.5
              "
            >


              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full
                  h-52
                  sm:h-60
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  "
                />


                <span className="
                absolute
                top-3
                left-3
                bg-[#9D6638]
                text-white
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                ">
                  Featured
                </span>


              </div>



              {/* Content */}

              <div className="p-4">


                <h2 className="text-lg font-bold text-[#4E220F] line-clamp-1 group-hover:text-[#9D6638] transition
                ">
                  {item.name}
                </h2>


                <p className="text-sm text-[#B0BA99] mt-1
                ">
                  {item.category}
                </p>



                <p className=" text-xl font-bold text-[#9D6638] mt-3
                ">
                  ₹{item.price}
                </p>


              </div>


            </div>

          ))}


        </div>

      </div>


    </>
  );
}

export default FeaturedProduct;