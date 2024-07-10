import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../componant/Dashboard";
import Navbar from "../componant/Navbar";
import Cart from "../componant/Cart";
import ItemDetails from "../componant/ItemDetails";

const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/cart" element={<Cart  />}></Route>
          <Route path="/ItemDetails" element={<ItemDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
