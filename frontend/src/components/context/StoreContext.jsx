import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

export const StoreContext = createContext(null) 

const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems] =useState({})
    const addToCart = (itemID)=>{
        setCartItems((prev)=>({
            ...prev,
            [itemID]:(prev[itemID] || 0)+1
        }))
    }
    const removeFromCart = (itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
    const contextValue={
      food_list,
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export  default StoreContextProvider;