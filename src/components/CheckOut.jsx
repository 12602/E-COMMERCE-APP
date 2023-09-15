import React from "react";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { orderProducts } from "../redux/Features/productSlice";
export const Checkout = ({ subTotal }) => {
  const tokenHandler = (resp) => {
    const { card } = resp;
    handleShip(card);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const handleShip = (card) => {
    const { address_city, address_country, address_line1, name, address_zip } =
      card;
    const city = address_city;
    const address = address_line1;
    const country = address_country;
    const pincode = address_zip;
    const formValue = { name, city, address, postalcode: pincode, country };

    let token = user.token;
    let total = 0;
    console.log(formValue);
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
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51MQqUpSJNO3NcS775SUO8fdNxvjPV1fyXlhlQbethdc2k0HcFiTLLaW2NPqfpqptsrOiNA8bOhSesSj9lU3jgBFi00XHkLlvfV"
      currency="INR"
    >
      <Button>Pay Now:Rs.{subTotal}</Button>
    </StripeCheckout>
  );
};
