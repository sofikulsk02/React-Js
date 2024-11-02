import React from "react";

const Cart = () => {
  let items = [
    "Aloo",
    "parval",
    "piyaj",
    "dhaniya",
    "loki",
    "chicken",
    "beef",
    "fish",
    "mutton",
  ];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && (
        <h3>You have {items.length} items inside your cart</h3>
      )}
      <h3>Products</h3>
      {items.map((item) => (
        <li key={Math.random()}>{item}</li>
      ))}
    </div>
  );
};

export default Cart;
