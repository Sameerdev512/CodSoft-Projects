import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../assets/scss/Dashboard.css";
import CartItem from "./CartItem";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import noteContext from "../context/NoteContext";

const Cart = () => {

  //  const location = useLocation();
  //  const state = location.state;
  //  console.log(state);

  return (
    <div>
      <Navbar />
      <div className="cart-container" onClick={()=>handleOver(data)}>
        <div>
          <h2>Shopping Cart</h2>
          {/* {data} */}
        </div>
        <hr style={{ height: "1px", width: "100%" }} />
        {/* {
          state.map((item)=>{
            return <CartItem />
          })
        } */}
        <CartItem/> 
        <CartItem/> 
        
        <div className="total-amount">
          Total amount : &nbsp;
          <span style={{ fontWeight: "bold" }}>25000.00</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
