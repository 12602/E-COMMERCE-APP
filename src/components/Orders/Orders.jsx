import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { format, render, cancel, register } from "timeago.js";
const Orders = () => {
  const { orderItems } = useSelector((state) => state.products);

  return (
    <Row className="home">
      <h1 className="text-center">My Orders</h1>
    
      <Row>
      {
         orderItems?.length > 0
        ? orderItems?.map((item) => {
           
            return (
              
            <>
                {
                    item.orderItems.map((i) => {
                  return (
                    <Col key={item._id} className="col-md-3">
                    <Card
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        <Card.Img
                          variant="top"
                          style={{ height: "15rem" }}
                          src={i.image}
                        />
                        <Card.Body>
                          <Card.Title className="h3 text-primary ">
                            {i.title}
                          </Card.Title>
                          <Card.Title className="h3 text-danger ">
                            Price: ${i.price}
                          </Card.Title>
                          <Card.Title className="h3 text-white mt-3 ">
                            Order At: {format(item.createdAt)}
                          </Card.Title>
                          <Card.Title className="h3 text-danger mt-3">
                            Excepted Delivery: {format(item.deliverAt)}
                          </Card.Title>
                        </Card.Body>
                      </Card>	
                    </Col>
                    
                  
                  );
                })}


              </>
              
            );
          })
        : ""}
      </Row>
    </Row>
  );
};

export default Orders;
