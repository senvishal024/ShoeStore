import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";
import CartSkeleton from "./CartSkeleton";




function CartComponent() {
  const Navigate=useNavigate();
  const [loading,setLoading]=useState(true)
  const {cart,fetchProducts,grandTotal,subTotal,shippingAmount}=useContext(cartContext);
  
    useEffect(()=>{
      setLoading(true);
      fetchProducts();
      setLoading(false);
    });
    if(loading){
      return <CartSkeleton/>
    }
    /* decrease button function */
    const decreaseQuantity=async (id)=>
      {
        const response =await fetch(`http://localhost:5000/shoeapp/cart-decrease/${id}`,
          {
          method:"PATCH",
          headers:{
            Authorization:localStorage.getItem("token"),
          },
        })
        const data =await response.json();
        fetchProducts();
      
      }
      /* increase button function */
      const increaseQuantity=async (id)=>{
        const response =await fetch(`http://localhost:5000/shoeapp/cart-increase/${id}`,{
          method:"PATCH",
          headers:{
            Authorization:localStorage.getItem("token"),
          },
        })
        const data =await response.json();
        fetchProducts();
      }
  
      const shopNowHamdle=async (id)=>{
       const response=await fetch(`http://localhost:5000/shoeapp/order/${id}`,{
        method:"POST",
        headers:{
          Authorization:localStorage.getItem("token"),
        }
       });
       const data=await response.json();

      }



          /*  remove button function */
      const removeButtonHandle=async (id)=>{
        const response=await fetch(`http://localhost:5000/shoeapp/remove-cart/${id}`,{
          method:"DELETE",
          headers:{
            Authorization:localStorage.getItem("token"),
          }
        })
        const data =await response.json();
        fetchProducts();
      }
      const checkOutHandle=async()=>{
        Navigate("/checkout")
      }
     
     /*  when cart will empty this function show dummy element */
   if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#F7F1DE] flex flex-col justify-center items-center">

    <div className="text-8xl">
        🛒
    </div>

    <h1 className="text-5xl font-bold text-[#4E220F] mt-6">
        Your Cart is Empty
    </h1>

    <p className="text-[#9D6638] mt-3">
        Looks like you haven't added anything yet.
    </p>

    <button
        onClick={()=>Navigate("/products")}
        className="mt-8 bg-[#4E220F] text-white px-8 py-3 rounded-xl hover:bg-[#9D6638] transition"
    >
        Continue Shopping
    </button>

</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F1DE] py-10">
      <div className="w-full mx-auto px-4 py-8 " >
       {/*  cart headung */}
        <div className="mb-8" >
          <div className="mb-10 relative w-full bg-cover bg-center min-h-[420px] md:min-h-[520px] flex flex-col"  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1699973056873-3ae919cfec4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMHNob2UlMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D')",
  }}>
    <div className="absolute inset-0 bg-black/40 flex flex-col  items-center justify-center px-6 text-center">
        <p className="text-[#D8B98A] uppercase tracking-[4px] text-center font-semibold">
        Shopping Cart
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fff] mt-2">
        Your Shopping Bag
        </h1>

        <p className="text-center text-gray-200 mt-3">
        <span className="text-bolder text-white">{cart.length}</span> Products Added
        </p>
        </div >
        </div>
                </div>
                {/* cart cards */}
                <div className="grid
            grid-cols-2
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-2
            sm:gap-4">
                  
                  {cart.map((item) => (
                      
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
                ">
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />

              <div className="p-4">
                  <h2 className="text-xl font-bold text-[#4E220F]">
                    {item.productId.name}
                  </h2>

                  <p className="text-[#9D6638] mt-1">
                    {item.productId.category}
                  </p>

                  <p className="text-2xl font-bold text-[#9D6638] mt-3">
                    ₹{item.productId.price}
                  </p>
                <div className="mt-5 flex items-center justify-between">

                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button
                       className="w-10 h-10 bg-[#F7F1DE] hover:bg-[#E8DCC4] text-[#4E220F]"
                      onClick={() => decreaseQuantity(item._id)}
                    >
                      -
                    </button>

                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      className="w-10 h-10 bg-[#F7F1DE] hover:bg-[#E8DCC4] text-[#4E220F]"
                      onClick={() => increaseQuantity(item._id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-lg font-bold text-[#9D6638]">
                    ₹{item.productId.price * item.quantity}
                  </p>

                </div>

                <div className="flex gap-3 mt-5">
                  <button className="flex-1  text-white py-2 rounded-lg bg-[#4E220F] hover:bg-[#9D6638] transition" onClick={()=>Navigate("/checkout",{
                    state:{
                      type:"buyNow",
                      product:item
                    }
                  })}>
                    Buy Now 
                  </button >
                  <button className="border border-[#4E220F] text-[#4E220F] hover:bg-[#4E220F] hover:text-white px-4 py-2 rounded-lg font-medium  transition-all duration-200" onClick={()=>removeButtonHandle(item._id)}>
                    Remove
                  </button>
                  
                </div>
                <div className="mt-3">

                </div>
              </div>
              </div>
          ))} 
        </div>
        {/* total product price detail */}
        <div className="mt-10 bg-transparent shadow-sm dark:shadow-black/50  rounded-sm    p-8">
          <h2 className="text-xl font-bold mb-4">
            Price Details
          </h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Total Quantity</span>
            <span>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping Ammount</span>
            <span>
              {shippingAmount}
            </span>
          </div>
          <hr className="my-4" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{subTotal}</span>
          </div>
            {/*checkout button */}
          <button className="w-full mt-5  text-white py-3 rounded-lg font-semibold bg-[#4E220F] hover:bg-[#9D6638]" onClick={()=>checkOutHandle()}>
            Checkout
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CartComponent