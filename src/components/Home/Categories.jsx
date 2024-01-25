import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/Features/productSlice";
import { ProductCart } from "../Product/ProductCard";

const Categories = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const findAllCat = () => 
  {
    let cat = [];
    cat.push("all");
    products?.map((product) => {
      cat.push(product.category);
    });

    let s = new Set(cat);
    setCategories(Array.from(s));
    setCategoryProduct(products);
  };
  useEffect(() => {
    findAllCat();
  }, []);

  const getItemByCat = (cat) => {
    if (cat === "all") {
      setCategoryProduct(products);
    } else
      setCategoryProduct(
        products.filter((item) => {
          return item.category === cat;
        })
      );
  };
  return (
    <>
      <Row className="mt-3 p-3 bg-black text-white">
        {categories && categories?.length > 0
          ? categories?.map((item) => {
              return (
                <Col
                  onClick={() => getItemByCat(item)}
                  className="text-white h4 item"
                  key={item._id}
                >
                  {item}
                </Col>
              );
            })
          : ""}
      </Row>
      <Row className="home">
        {categoryProduct && categoryProduct?.length > 0
          ? categoryProduct?.map((item) => {
              return (
                <Col md={4}>
                  <ProductCart item={item} delay={0.5} />
                </Col>
              );
            })
          : ""}
      </Row>
    </>
  );
};

export default Categories;
