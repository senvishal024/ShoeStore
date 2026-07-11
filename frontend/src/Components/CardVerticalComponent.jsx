    import React, { useEffect, useRef, useState } from 'react'
    import { useNavigate } from 'react-router-dom';


    function CardVerticalComponent({search,sort,category}) {
      const categoryImages = {
  Men: "/images/men-banner.jpg",
  Women: "/images/women-banner.jpg",
  Sneakers: "https://images.unsplash.com/photo-1490168105446-f43395eb50b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxzaG9lfGVufDB8MHwwfHx8MA%3D%3D",
  Running: "https://plus.unsplash.com/premium_photo-1672046218369-67e12ed1c364?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2V8ZW58MHwwfDB8fHww",
  Casual: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHwwfDB8fHww",
};
        const Navigate=useNavigate();
      const [products, setProducts] = useState([]);

      useEffect(() => {
         const controller = new AbortController();
        const timer=setTimeout(() => {
           fetchProducts();
        }, 500);
        return () =>clearTimeout(timer)
         controller.abort();
       
      }, [category]);

      const fetchProducts = async () => {
        const response = await fetch(
          `https://shoestore-4f06.onrender.com/shoeapp/show-vertical-card?category=${category}`,
          {
            credentials: "include",
            headers: {
              Authorization: localStorage.getItem("token")||" ",
            },
          }
        );
        
        const data = await response.json();
        console.log(data);
        setProducts(data);
        
      };
    
      return (
        <>
          <section className="relative fixed h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${categoryImages[category]})`, }} >
           <div className="absolute inset-0 bg-black/50">
           </div> 
           <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"> 
          {category} Collection </h1> 
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl">
           Discover our premium {category.toLowerCase()} shoes.
           </p>
           </div> 
          </section>
        <div className="w-full max-w-7xl mx-auto px-3 py-10">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">

    {products.map((item) => (
      <div
        key={item._id}
        onClick={() => Navigate(`/product-detail/${item._id}`)}
        className="bg-white rounded-sm shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:dark:shadow-black/50  border border-gray-100 hover:-translate-y-0.5"
      >

        {/* Image */}
        <div className="relative overflow-hidden bg-[#F8F6F2]">

          <img
            src={item.image}
            alt={item.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
          />

          {item.featured && (
            <span className="absolute top-3 left-3 bg-[#4E220F] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full">
              Featured
            </span>
          )}

        </div>

        {/* Content */}

        <div className="p-4">

          <h2 className="text-sm md:text-lg font-bold text-[#4E220F] line-clamp-2">
            {item.name}
          </h2>

          <p className="text-xs md:text-sm text-[#9D6638] mt-1">
            {item.category}
          </p>

          <div className="flex items-center justify-between mt-2">

            <p className="text-lg md:text-2xl font-bold text-[#4E220F]">
              ₹{item.price}
            </p>

          </div>

        </div>

      </div>
    ))}

  </div>
</div>
        </>
      );
    }

    export default CardVerticalComponent
