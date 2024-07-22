import React from 'react'
import Card from "react-bootstrap/Card";  
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import ItemDetails from './ItemDetails';

const Item = ({title,price,desc,image,handleCartItem}) => {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="Item-cu">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src={image}
            onClick={() => navigate("/ItemDetails")}
            style={{cursor:'pointer',width:"200px",height:"220px",alignSelf:"center"}}
          />
          <Card.Body>
            <Card.Title>{title.substr(0,35)} </Card.Title>
            <Card.Text>
              {desc.substr(0,55)}...
            </Card.Text>
            <h6>Price : {price}</h6>
            <Button variant="primary" onClick={()=>{handleCartItem(title,price,desc,image)}}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Item
