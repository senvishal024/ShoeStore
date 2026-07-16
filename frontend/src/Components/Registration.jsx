import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
function RegistrationPage(){
    const [user,setUser]=useState({name:"",email:"",password:""});
    console.log(user)
    const navigate=useNavigate();
    const handleSubmit=async ()=>{
    
        console.log("before fetch")
        const response= await fetch("https://shoestore-4f06.onrender.com/shoeapp/registration",{
            method:"POST",
            credentials: "include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });
        console.log("after fetch")
        const data =await response.json();
        console.log("after data fetch")
        console.log(data);
        setUser({name:"",email:"",password:""})
    }   

    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <button
                    className="absolute top-10 left-10 text-blue-600 font-bold hover:underline" onClick={()=>navigate(-1)}
                >
                    ← Back
                </button>
                <h2 className="text-3xl font-bold text-center mb-6">
                Register
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                <div>
                    <label className="block mb-2 text-sm font-medium">
                    Name
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=>setUser({
                        ...user,
                        name:e.target.value
                    })}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">
                    Email
                    </label>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=>setUser({
                        ...user,
                        email:e.target.value
                    })}
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">
                    Password
                    </label>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=>setUser({
                        ...user,
                        password:e.target.value
                    })}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                    onClick={handleSubmit}
                >
                    Register
                </button>

                </form>

                <p className="text-center text-sm mt-5">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Login
                </Link>
                </p>

            </div>

        </div>
        </>
    )
}
export default RegistrationPage