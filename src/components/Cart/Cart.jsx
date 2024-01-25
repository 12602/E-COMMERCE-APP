import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import { Checkout } from "./CheckOut";
const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  let total = 0;
  cart.map((item) => {
    total += item.price;
  });
  total = parseFloat(total).toPrecision(6);
  const navigate = useNavigate();
  const placeOrder = () => {
    navigate("/shipping");
  };
  if (cart?.length === 0) {
    <div className="home">
      <h1>You have not add to cart any item</h1>
      <h1>Go shop first!!!!</h1>
      <h2>
        Go back <button onClick={() => navigate("/")}>Go Back</button>
      </h2>
    </div>;
  }
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  return (
    <div>
      <Row className="mt-4 d-flex  ">
        <h1 className="h1 text-center text-dark p-3 ">My Cart</h1>
        <Col className="col-6">
        {/* <h1><Ordered Items</h1> */}
        <h3 className="text-success h3 mx-3 text-center" >Ordered Items</h3>
          {cart?.map((item) => {
            return (
              <Col className="d-flex col-md-8 align-items-center justify-content-around">
                <img style={{ width: "300px" }} src={item.image} alt="item" />
                <span className="h5 p-2 text-danger">{item.title}</span>
                <span className="h4 text-danger">${item.price}</span>
              </Col>
            );
          })}
        </Col>
        {cart?.length > 0 ? (
          <Col className="col-md-6 text-center cart" >
          <h3 className="text-success h3 mx-3 text-center" >Payment</h3>
            <Card className="bg-dark text-white p-5 cart my-3" style={{width:500,height:300}}>
              <Card.Text className="h4 mt-3">Total Items:{cart?.length}</Card.Text>

              <span className="mt-3">Payment Info:</span>
            <span className="mt-3 mb-3">
            <span className="mt-2 mb-4">Sub Total: </span>
              <span className="mt-4 text-sucess h-3">RS : {total} /-</span>
            </span>    
              <Checkout className="mt-3" subTotal={total} />
            </Card>
          </Col>
        ) : (
          <div className="home text-center text-white m-5 p-5">
            <h1>You have not add to cart any item</h1>
            <h1>Go shop first!!!!</h1>
            <h2>
              Go back:{"   "}
              <button className="btn btn-success" onClick={() => navigate("/")}>
                Go Back
              </button>
            </h2>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Cart;
