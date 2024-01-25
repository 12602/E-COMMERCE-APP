import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderProducts } from "../../redux/Features/productSlice";
import { toast } from "react-toastify";
const Shipping = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const handleShip = (e) => {
    e.preventDefault();
    const formValue = { name, city, address, postalcode: pincode, country };

    let token = user.token;
    let total = 0;
    cart.map((item) => {
      total += item.price;
    });
    dispatch(
      orderProducts({
        formValue,
        cart,
        navigate,
        toast,
        token,
        totalPrice: total,
      })
    );
  };
  return (
    <div className="container-fluid m-5">
      <div className="container bg-black text-white">
        <div className="col-12">
          <div className="text-center h3 heading py-2">Shipping Address</div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row blog-form" onSubmit={handleShip}>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="name"
                  name="name"
                  value={city}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className="col-12 py-3">
                <input
                  type="text"
                  className="form-control input-text-box"
                  placeholder="pincode"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div className="col-12 py-3 text-center">
                <Button type="submit" style={{ width: "40rem" }}>
                  Purchase Now !
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
