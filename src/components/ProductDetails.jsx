import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/Features/productSlice";
// import data from "./data";
import { ProductCart } from "./ProductCard";
import Search from "./Search";
import Slider from "./Slider";
const ProductDetails = () => {
  const { loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  if (loading || !products) {
    return <h1>Loading....</h1>;
  }
  console.log(products);

  return (
    <>
      <Slider products={products} />
      <Row className="home">
        <h1 className="h1 text-center text-dark p-3 ">Our Products</h1>

        {/* <Search products={products}/> */}
        {products?.length > 0
          ? products?.map((item) => {
              return (
                <Col key={item._id} md={4}>
                  <ProductCart item={item} delay={0.5} />
                </Col>
              );
            })
          : "No Product Added"}
      </Row>
    </>
  );
};

export default ProductDetails;
