import { useNavigate } from "react-router-dom"

function Hero(){
  const navigate=useNavigate();

  
    return(
        <>
        <section className="relative min-h-screen bg-center bg-cover bg-fixed"
  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1744492017327-c12f9ac72857?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}>
      <div className="absolute inset-0 bg-black/50">

        {/* Left Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight drop-shadow-lg">
            Step Into
            <span > Style</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Discover the latest collection of premium shoes.
            Designed for comfort, performance, and everyday style.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-transparent hover:text-white border-2 transition duration-[0.6s] ease-in-out text-shadow-xs" className="bg-white text-[#9D6638] font-bold px-8 py-3 rounded-xl border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"onClick={()=>navigate("/products")} >
              Shop Now
            </button>

            <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-[#9D6638] transition-all duration-300"  onClick={() => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  }}>
              About Us
            </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        
       
      </div>
    </section>
        </>
    )
}
export default Hero