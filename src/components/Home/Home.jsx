import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Features/productSlice";
import Categories from "./Categories";
import ProductDetails from "../Product/ProductDetails";
import Search from "./Search";
//import Search from "./Search";

const Home = () => {
  return (
    <div>
      <ProductDetails />

      <div className="text-center mt-3 mb-3 p-4 text-white bg-black home">
        <h1>See Product By Your Favourite Categories</h1>
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Home;
