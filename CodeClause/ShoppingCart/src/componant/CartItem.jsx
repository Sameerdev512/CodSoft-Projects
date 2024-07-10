import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="CartItem-container">
        <div className="item-image">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="1"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="item-details">
          <div className="item-heading">
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              debitis cumque quas ea quod ut reprehenderit iste inventore qui
              sed, nobis rerum corporis maxime molestias nesciunt harum numquam
              laborum aliquam tempore voluptates facilis consequatur!
            </h5>
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
        <div className="item-price">25000.00</div>
      </div>
      <hr style={{ height: "1px", width: "100%" }} />
    </div>
  );
};

export default CartItem;
