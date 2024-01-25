import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ProductCart } from "../Product/ProductCard";
import { useDispatch } from "react-redux";
import ProductDetails from "../Product/ProductDetails";
import SearchProductDetails from "./SearchProductDetail";

const Search = () => {
  const [name, setName] = useState("");
  const [products,setProduct]=useState([]);
  
  const search = async() => {
             try {
              if(name===""){
                setName("allProducts");
                const {data}=   await axios.get(`http://localhost:5000/api/search/${name}`)    
                setProduct(data);

              }
              else
              {
              const {data}=   await axios.get(`http://localhost:5000/api/search/${name}`)    
              setProduct(data);
              
            }
             } catch (error) {
              setName("All Products");
              const {data}=   await axios.get(`http://localhost:5000/api/search/${"allprodcuts"}`)    
              setProduct(data);

             }
          
            
            };
           useEffect(()=>{
              const getItems=async()=>{
                  setName("All Products");
                const {data}=   await axios.get(`http://localhost:5000/api/search/${"allprodcuts"}`)    
                setProduct(data);
              }
                        getItems();
           },[])
           //fetching all the products from the servers

  
  return (
    <>
     <div className="m-2 p-2  d-flex align-items-center justify-content-center ">
      <div className=" d-flex form-group text-center align-items-center ">
        <Form.Control
          type="email"
          style={{ width: "50vw" }}
          placeholder="Enter product"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={search}>Search</Button>
        </div>
        </div>
          <h1>
          {
            name ==="All Products"? <h3>All Products</h3>  :
            <h3> All Products Related  To: {name}</h3>
          }
           
          </h1>
        <Row>
        {
           
           
           products ?  products?.map((item) => {
               return (
                <Col key={item._id} md={4}>
                  <ProductCart item={item} delay={0.5} />
                </Col>
              );
            }):"No Products Present!!"
          
        }  
         </Row>
           
        
    
                      
       
          
          
    </>
   
  );
};

export default Search;
