import React, { useState,useEffect,createContext } from 'react'
import CartComponent from './CartComponent';

    const cartContext =createContext();
function CartContext({children}) {
     const [cart, setCart] = useState([]);

  useEffect(() => {
    const token=localStorage.getItem("token");
    if(token){
     fetchProducts();
    }
    
  }, []);

    
    /* product fetch from db  function */
    const fetchProducts = async () => 
      {
        const response = await fetch
        (
          "https://shoestore-4f06.onrender.com/shoeapp/cart",
          {
            credentials: "include",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (!response.ok) {
        return;
    }
        const data = await response.json();
        setCart(data);
        console.log(data);
      };

       /* cart total section */
        const subTotal =cart.reduce((sum,item)=>{
                  return sum + item.productId.price*item.quantity;
                },0)
              let shippingAmount=100;
                  if(subTotal>=1000){
                    shippingAmount=0;
                  }
              let taxAmount=(subTotal*3)/100
        const grandTotal=subTotal+shippingAmount+taxAmount;
       
  return (
    <cartContext.Provider value={{cart:cart,fetchProducts:fetchProducts,subTotal:subTotal,grandTotal:grandTotal,shippingAmount:shippingAmount,taxAmount:taxAmount}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext
export {cartContext}
