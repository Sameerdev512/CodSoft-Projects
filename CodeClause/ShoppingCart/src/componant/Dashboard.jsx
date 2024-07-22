import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Item from './Item'
import '../assets/scss/Dashboard.css'
import useStore from './zustand/useStore'

const Dashboard = () => {

   const [ItemDetailsArray, setItemDetailsArray] = useState([]);
  //taking data using api
const fetchDetails=async ()=>{
  const url =
    "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=in&sort_by=RELEVANCE&product_condition=ALL";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "d1b0ff6210msh667e78eebf1764ep1db157jsn17a753c2129b",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const resultArray= Object.values(result.data.products);
    setItemDetailsArray(resultArray);
    console.log(ItemDetailsArray);
  } catch (error) {
    console.error(error);
  }
}
  //random data real will be fetched by API
  // const ItemDetails = [
  //   {
  //     id: 1,
  //     title: "bed",
  //     price: 500.0,
  //     description:
  //       "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
  //   },
  //   {
  //     id: 2,
  //     title: "sofa",
  //     price: 5500.0,
  //     description:
  //       "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
  //   },
  //   {
  //     id: 3,
  //     title: "bedsheet",
  //     price: 1200.0,
  //     description:
  //       "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
  //   },
  //   {
  //     id: 4,
  //     title: "coller",
  //     price: 1500.0,
  //     description:
  //       "The Navbar component provides navigation links and branding. It enhances user experience with responsive design, allowing easy access to various sections of the application, making navigation intuitive and visually appealing.",
  //   },
  //   {
  //     id: 5,
  //     title: "shower",
  //     price: 5200.0,
  //     description:
  //       "This React component features a Navbar, displays items, and handles user interactions. It dynamically renders Item components based on provided details, using the map method, ensuring a streamlined and responsive user interface.",
  //   },
  // ];

 
  //set data to zustand store
  const setData = useStore((state) => state.setData);

  const handleCardItem = (title, price, desc,image) => {
    setData({
      title: title,
      price: price,
      desc: desc,
      image:image
    });
  };

  useEffect(()=>{
    fetchDetails();
  },[])
  

  return (
    <>
        <Navbar />
        <div className="container">
          {/* <Item title="bed" price="20" handleCartItem={handleCardItem}/>
        <Item title="cooler" price="10" handleCartItem={handleCardItem}/> */}
          {ItemDetailsArray.map((item) => {
            console.log(item)
            return (
              <Item
                key={item.asin}
                title={item.product_title}
                price={item.product_price}
                desc={item.product_title}
                image={item.product_photo}
                handleCartItem={handleCardItem}
              />
            );
          })}
        </div>
    </>
  );
}

export default Dashboard
