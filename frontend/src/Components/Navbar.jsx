import { Link, replace, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
function Navbar() {
  const navigate=useNavigate()
  const [menuOpen,setMenuOpen]=useState(false)
  const wishlistHandle=async ()=>{
         const token=localStorage.getItem("token");
         if(!token){
           const isconfirmed=window.confirm("please Login first");
           if(isconfirmed){
            console.log("isconfirmed")
            return navigate("/login" );
           }
           else{
            return ;
           }
         }
         else{
          return navigate("/wishlist");
         }
  }
  const cartHandle=async ()=>{
    const token=localStorage.getItem("token");
    if(!token){
      const isconfirmed=window.confirm("please login first");
      if(isconfirmed){
        return navigate("/login");
      }
      else{
        return;
      }
    }
    else{
      return navigate("/cart");
    }
  }
  return (
    <nav className="bg-[#F7F1DE] shadow-md w-full sticky z-50 top-0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-[#4E220F]">
            ShoeStore
          </h1>
          
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-[#4E220F] hover:text-[#9D6638] "
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium text-[#4E220F] hover:text-[#9D6638]"
          >
            Products
          </Link>

          <button onClick={()=>cartHandle()}
            className="font-medium text-[#4E220F] hover:text-[#9D6638]"
          >
            Cart
          </button>

           <button
            className="font-medium text-[#4E220F] hover:text-[#9D6638]"
            onClick={()=>wishlistHandle()}
          >
            Wishlist
          </button>

          <Link
            to="/login"
            className="font-medium  border-[#4E220F] text-[#4E220F] hover:bg-[#4E220F] hover:text-white px-3 py-1 rounded-md transistion ease-in-out duration-[0.6s]"
          >
            Login
          </Link>
        </div>
        {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-[#4E220F]"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
      </div>
            {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F1DE] border-t border-[#D7C7AE] px-6 py-5 flex flex-col gap-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[#4E220F] font-medium"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="text-[#4E220F] font-medium"
          >
            Products
          </Link>

          <button
            className="text-left text-[#4E220F] font-medium"
            onClick={() => {
              setMenuOpen(false);
              cartHandle();
            }}
          >
            Cart
          </button>

          <button
            className="text-left text-[#4E220F] font-medium"
            onClick={() => {
              setMenuOpen(false);
              wishlistHandle();
            }}
          >
            Wishlist
          </button>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border border-[#4E220F] rounded-lg py-2 text-center text-[#4E220F] font-medium hover:bg-[#4E220F] hover:text-white transition"
          >
            Login
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
