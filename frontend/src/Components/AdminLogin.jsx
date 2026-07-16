import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const navigate=useNavigate();
    const [user,setUser]=useState({email:"",password:""});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response=await fetch("https://shoestore-4f06.onrender.com/shoeapp/admin-login",{
            method:"POST",
            credentials: "include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        const data=await response.json();
        localStorage.setItem("token",data.token);
        localStorage.setItem("role", data.role);
        setUser({email:"",password:""});
        if(data.role==="admin"){
        return navigate("/admin");
        }
        else{
            return alert("enter vailed information");
        }
    }
  return (
    <>
            
        <div className="min-h-screen w-full bg-cover text-[#D8B98A] flex flex-col items-center justify-center" style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1652631631797-af8035ed38fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGx1eHVyeSUyMHNob2UlMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D')",
  }}>
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center " >
         <div className="p-4 ">
        <button     
            onClick={()=>Navigate(-1)}
              className="absolute top-8 left-8 flex items-center gap-3 font-semibold text-white hover:text-[#9D6638] transition-all duration-300"
        >
             <span className="w-10 h-10 flex items-center justify-center rounded-full border-3 border-[#fff]  hover:text-white transition">
                <FaArrowLeft className="text-sm" />
            </span>  
        </button>
    </div>
            <h1 className="text-5xl font-extrabold text-[#D8B98A] mb-8">
    Shoe<span className="text-white">Store</span>
  </h1>
        <div className="w-full max-w-lg bg-transparent p-8 rounded-xl shadow-lg p-10 border-2 border-[#fff] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]transition-all duration-500">
            
            <h2 className="text-4xl font-extrabold
            text-[#D8B98A] font-bold text-center mb-6">
               Admin Login
            </h2>
            <p className="text-gray-200 mt-2 text-center">
            Welcome Back 
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>

                <div>
                    <label className="block mb-2 text-[#D8B98A]
                        font-semibold  font-medium">
                        Email📧
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border-2 border-[#fff] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#fff] text-white "
                        value={user.email}
                        onChange={(e)=>setUser({
                            ...user,
                            email:e.target.value
                        })}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-[#D8B98A]
                        font-semibold  font-medium">
                        Password🔒
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border-2 border-[#fff] rounded-xl focus:outline-none focus:ring-1 focus:ring-[#fff] text-white"
                        value={user.password}
                        onChange={(e)=>setUser({
                            ...user,
                            password:e.target.value
                        })}
                    />
                </div>

                
                
                <button
                    type="submit"
                    className="w-full bg-[#fff] text-black py-3 rounded-lg  transition hover:bg-[#9D6638] font-semibold rounded-xl transition duration-300"

                >
                    Login
                </button>

            </form>

            <p className="text-center text-[#fff] text-sm mt-5">
                Don't have an account?
                <Link to="/registration" className="text-[#D8B98A]  hover:text-[#fff] font-medium">
                    Register
                </Link>
            </p>

        </div>
        </div>

    </div>
            </>
  )
}

export default AdminLogin
