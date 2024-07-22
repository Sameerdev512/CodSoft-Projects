import React from "react";

const CartItem = ({details}) => {
const rupeeSymbol = "\u20B9";

  return (
    <div>
      <div className="CartItem-container" >
        <div className="item-image" style={{borderWidth:"0"}}>
          <img
            src={details.image}
            alt="1"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="item-details">
          <div className="item-heading">
            <h5>
              {details.title.substr(0,40)}..
              <br />
            </h5>
            <h6 style={{fontFamily:"sans",fontWeight:"500",fontSize:"17px"}}>{details.desc.substr(0,120)}...</h6>
          </div>
          <div>In Stock</div>
          <div>Sold by MERCHANT NAME</div>
          <div>Gift options not Available</div>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Qty : 1
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item " href="#">
                2
              </a>
              <a className="dropdown-item" href="#">
                3
              </a>
              <a className="dropdown-item" href="#">
                4
              </a>
            </div>
          </div>
        </div>
        <div className="item-price">
          {rupeeSymbol}{details.price}
        </div>
      </div>
      <hr style={{ height: "1px", width: "100%" }} />
    </div>
  );
};

export default CartItem;
