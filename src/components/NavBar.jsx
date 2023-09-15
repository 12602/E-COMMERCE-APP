import React from "react";
import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/Features/authSlice";
import {
  getOrderProducts,
  logoutHandler,
} from "../redux/Features/productSlice";
const NavBar = () => {
  const navigate = useNavigate();
  const { cart, orderItems } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutHandler());
    dispatch(logoutUser());
    navigate("/auth");
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
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/categories">
              Products
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
              <span onClick={() => navigate("/auth")}> Login</span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
