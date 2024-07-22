import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../assets/scss/Dashboard.css";
import CartItem from "./CartItem";
import useStore from "./zustand/useStore";

const Cart = () => {
  //rupee symbol
  const rupeeSymbol = "\u20B9";

  // Using zustand to get data
  const data = useStore((state) => state.data);

  const [components, setComponents] = useState(() => {
    // Initialize from local storage or an empty array
    const savedComponents = localStorage.getItem("components");
    return savedComponents ? JSON.parse(savedComponents) : [];
  });

  const addCartItem = (newItem) => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents, newItem];
      localStorage.setItem("components", JSON.stringify(updatedComponents));
      return updatedComponents;
    });
  };

  useEffect(() => {
    if (data.title && data.desc && data.price) {
      const newItem = {
        title: data.title,
        desc: data.desc,
        price: data.price.replace("$",""),
        isReady: true,
        image:data.image
      };
      console.log("useEffect triggered with data:", data);
      addCartItem(newItem);
    }
  }, [data]);



  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div>
          <h2>Shopping Cart</h2>
        </div>
        <hr style={{ height: "1px", width: "100%" }} />

        {components.map((item, index) => (
          <CartItem key={index} details={item} />
        ))}

        <div className="total-amount">
          Total amount: &nbsp;
          <span style={{ fontWeight: "bold" }}>
            {rupeeSymbol}{components.reduce(
              (total, item) => parseFloat(total) + parseFloat(item.price),
              0
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
