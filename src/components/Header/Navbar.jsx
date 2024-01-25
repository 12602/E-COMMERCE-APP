import React from "react";
//react-bootstrap
import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//redux start
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//redux 
import { logoutUser } from "../../redux/Features/authSlice";
import {
  getOrderProducts,
  logoutHandler,
} from "../../redux/Features/productSlice";





const NavBar = () => {
  const navigate = useNavigate();
 // const { cart, orderItems } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutHandler());
    dispatch(logoutUser());
    navigate("/login");
    toast.success("LogOut Succesfully!!!!");
  };
  const getOrderItems = () => {
    dispatch(getOrderProducts({ user }));
    navigate("/orders");
  };
  return (
    <Navbar expand="lg" className="navb" style={{height:70}}>
      <Container>
        <Navbar.Brand>
          <Link className="link" to="/">
            Shopify
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link h3 p-2 ml-3" to="/">
              Home
            </Link>
            <Link className="link h3 p-2 ml-3" to="/categories">
              Product (Categories)
            </Link>
            <Link className="link h3 p-2 ml-3 " to="/search">
              Search Product
            </Link>
          </Nav>

          <Nav className="me-auto">
            {user ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ width: "10vw" }}
                    variant="success"
                    id="dropdown-basic"
                  >
                    {user?.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/cart")}>
                      Cart
                    </Dropdown.Item>
                    <Dropdown.Item onClick={getOrderItems}>
                      My orders
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logout}>LogOut</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Button onClick={() => navigate("/login")}> Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
