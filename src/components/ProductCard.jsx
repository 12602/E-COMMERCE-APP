import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/Features/productSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
export const ProductCart = ({ item, delay }) => {
  //toast
  const notify = (message) => toast(message);
  //state handle
  const [cart,setCart]= useState(false);
  const navigate = useNavigate();

    
  const { title, image, description, _id,price } = item;
console.log(item);
  const { user } = useSelector((state) => state.auth);
   //read more
  const readMore = () => {
    navigate(`/product/${_id}`);
  };
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(addToCart(item));
       notify("Item Added to Cart Successfully!!");
       setCart(true);
  };

  return (
    <div className="mt-3">
      <motion.div
        className="menuCard"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}
      >
        <Card style={{ backgroundColor: "#88B048", color: "white",height:600 }}>
          <Card.Img variant="top" style={{ height: "13rem" }} src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description.slice(0, 150)}</Card.Text>
            <Card.Text>
              {description.length > 200 && (
                <Button variant="success" onClick={readMore}>
                  Read More
                </Button>
              )}
                  <Card.Text><span className="text-danger h5 p-2">Price:</span><span className="text-success h4 ">Rs:{price}</span></Card.Text>

                {
                  user && cart
                   ?   <Button variant="success" className="ms-3">Item already in the cart</Button> :  
                   <Button onClick={addtoCart} variant="primary" className="ms-3">Add to Cart</Button>
                }
              
              
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </div>
  );
};
