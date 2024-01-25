import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Features/productSlice";
import { ProductCart } from "../Product/ProductCard";


const SearchProductDetails = () => {

  //redux state
  const { loading, products } = useSelector((state) => state.products);
       const dispatch = useDispatch();

  //fetching all the products from the servers
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);



  //if loading is true then return loading
  if (loading || !products) 
  {
    return <h1>Loading....</h1>;
  }


  return (
    <>
      <Row className="home">
    
        <h1 className="h1 text-center text-dark p-3 ">Our Products</h1>
      
       
        {products?.length > 0
          ? products?.map((item) => {
              return (
                <Col key={item._id} md={4}>
                  <ProductCart item={item} delay={0.5} />
                </Col>
              );
            })
          : "No Product Added"
          }
      </Row>
    </>
  );
};

export default SearchProductDetails;
