import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Item from './Item'
import '../assets/scss/Dashboard.css'
import Cart from './Cart'
// import NoteState from '../context/NoteState'

const Dashboard = ({setData}) => {

  //random data real will be fetched by API
  const ItemDetails = [
    {
      id: 1,
      title: "bed",
      price: 500.0,
      description:
        "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
    },
    {
      id: 2,
      title: "sofa",
      price: 5500.0,
      description:
        "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
    },
    {
      id: 3,
      title: "bedsheet",
      price: 1200.0,
      description:
        "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
    },
    {
      id: 4,
      title: "coller",
      price: 1500.0,
      description:
        "The Navbar component provides navigation links and branding. It enhances user experience with responsive design, allowing easy access to various sections of the application, making navigation intuitive and visually appealing.",
    },
    {
      id: 5,
      title: "shower",
      price: 5200.0,
      description:
        "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
    },
  ];

  //To set item details in cart
  const [cartItemDetails, setCartItemDetails] = useState({
    title: "one",
    price: 0,
    desc: "",
  });

  const handleCardItem = (title, price, desc) => {
    setCartItemDetails({
      title: title,
      price: price,
      desc: desc,
    });
  };


  return (
    <>
      {/* <NoteState cartItem={cartItem}> */}
        <Navbar />
        <div className="container">
          {/* <Item title="bed" price="20" handleCartItem={handleCardItem}/>
        <Item title="cooler" price="10" handleCartItem={handleCardItem}/> */}
          {ItemDetails.map((item) => {
            return (
              <Item
                key={item.id}
                title={item.title}
                price={item.price}
                desc={item.description}
                handleCartItem={handleCardItem}
              />
            );
          })}
        </div>
        {/* </NoteState> */}
    </>
  );
}

export default Dashboard
