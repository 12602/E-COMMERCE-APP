import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProductCart } from "../ProductCard";

const ViewOrders = () => {
  const { orderItems } = useSelector((state) => state.products);
  return (
    <div>
      <Row>
        {orderItems?.map((item) => {
          return (
            <Col md={4}>
              <ProductCart item={item} />
            </Col>
          );
        })}
      </Row>
      ;
    </div>
  );
};

export default ViewOrders;
