import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Rajib sk",
    price: 1200,
    availability: "In stock",
  };
  return (
    <div>
      <h1>Name:{product.name}</h1>
      <h1>Price:${product.price}</h1>
      <h1>Availabilit:{product.availability}</h1>
    </div>
  );
};

export default ProductInfo;
