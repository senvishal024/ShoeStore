import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUsComponent() {

  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="
      relative 
      py-24 
      md:py-32 
      bg-fixed 
      bg-center 
      bg-cover
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1600')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      <div
        className="
        relative 
        max-w-6xl 
        mx-auto 
        px-5 
        sm:px-8 
        text-center 
        text-white
        "
      >


        {/* Small Heading */}
        <span
          className="
          uppercase 
          tracking-[4px] 
          text-[#9D6638] 
          font-semibold 
          text-sm
          "
        >
          About Us
        </span>



        {/* Main Heading */}
        <h2
          className="
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          font-bold 
          mt-5 
          leading-tight
          "
        >

          Crafted 
          <span className="text-[#9D6638]">
            {" "}For Every Step
          </span>

        </h2>




        {/* Description */}
        <p
          className="
          mt-6
          md:mt-8
          text-gray-400
          text-base
          sm:text-lg
          leading-8
          max-w-3xl
          mx-auto
          "
        >
          We believe great shoes are more than fashion — they represent
          confidence, comfort and performance. Our premium collection is
          carefully designed with modern style, superior quality and
          long-lasting durability for every journey.
        </p>





        {/* Stats */}

        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-5 
          md:gap-8 
          mt-14
          "
        >


          <div
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            p-5
            hover:-translate-y-2
            transition
            duration-300
            "
          >

            <h3 className="text-3xl md:text-4xl font-bold text-[#9D6638]">
              10K+
            </h3>

            <p className="mt-2 text-gray-300 text-sm md:text-base">
              Happy Customers
            </p>

          </div>





          <div
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            p-5
            hover:-translate-y-2
            transition
            duration-300
            "
          >

            <h3 className="text-3xl md:text-4xl font-bold text-[#9D6638]">
              500+
            </h3>

            <p className="mt-2 text-gray-300 text-sm md:text-base">
              Premium Shoes
            </p>

          </div>






          <div
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            p-5
            hover:-translate-y-2
            transition
            duration-300
            "
          >

            <h3 className="text-3xl md:text-4xl font-bold text-[#9D6638]">
              50+
            </h3>

            <p className="mt-2 text-gray-300 text-sm md:text-base">
              Top Brands
            </p>

          </div>







          <div
            className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            p-5
            hover:-translate-y-2
            transition
            duration-300
            "
          >

            <h3 className="text-3xl md:text-4xl font-bold text-[#9D6638]">
              4.9★
            </h3>

            <p className="mt-2 text-gray-300 text-sm md:text-base">
              Customer Rating
            </p>

          </div>


        </div>





        {/* Button */}

        <button
          onClick={() => navigate("/products")}
          className="
          mt-12
          md:mt-14
          px-8
          md:px-10
          py-3.5
          md:py-4
          bg-[#9D6638]
          text-white
          rounded-full
          border
          border-[#9D6638]
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
          font-semibold
          shadow-lg
          "
        >
          Explore Collection
        </button>



      </div>


    </section>
  );
}


export default AboutUsComponent;