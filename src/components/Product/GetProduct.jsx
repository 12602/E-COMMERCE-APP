import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailProduct } from "../../redux/Features/productSlice";
import { Col } from "react-bootstrap";
const GetProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(detailProduct({ id }));
  }, []);

  const readMore = () => {
    navigate(`/`);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const addToCart = () => {};
  return (
    <div className="mt-3">
      <Card style={{ backgroundColor: "black", color: "white" }}>
        <Card.Img
          variant="top"
          // style={{ height: "20rem" }}
          src={product?.image}
          fluid
        />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.description?.slice(0, 150)}</Card.Text>
          <Card.Text>
            {product?.description?.length > 200 && (
                  <>{product?.description}</> 
            )}
            </Card.Text>
            <Card.Text><span className="text-danger h5 p-2">Price:</span><span className="text-success h4 ">Rs:{product?.price}</span></Card.Text>
             <Col md={12} className="text-center">
                    
           
            <Button variant="success" onClick={readMore}>
                Go Back To Home
              </Button>
            <Button onClick={addToCart} variant="primary" className="ms-3">
              Add To Cart
            </Button>
            </Col>    
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default GetProduct;