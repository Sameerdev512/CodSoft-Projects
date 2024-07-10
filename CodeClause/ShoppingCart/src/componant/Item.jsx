import React from 'react'
import Card from "react-bootstrap/Card";  
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import ItemDetails from './ItemDetails';

const Item = ({title,price,desc,handleCartItem}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Item-cu">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            onClick={() => navigate("/ItemDetails")}
            style={{cursor:'pointer'}}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <h6>Price : {price}</h6>
            <Button variant="primary" onClick={()=>{handleCartItem(title,price,desc)}}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Item
