import React from "react";
import { Col } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCart } from "./ProductCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = ({ products }) => {
  return (
    <div className="home m-3 p-3">
      <h1 className="h1 text-center text-white p-3 ">Our Top Products</h1>
      <Carousel
        className="slider"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products?.length > 0
          ? products?.map((item) => {
              return (
                <div>
                  <img src={item.image} alt={item} className="slider-img" />
                  <h1 className="h3 text-white">{item.title}</h1>
                </div>
              );
            })
          : ""}
      </Carousel>
    </div>
  );
};

export default Slider;
