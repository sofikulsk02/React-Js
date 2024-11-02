import React, { useState } from "react";

const Shopping = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((prevItem) => [...prevItem, newItem]);
    setName("");
    setQuantity("");
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add items to add"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          value={quantity}
          placeholder="quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <button type="submit">Add to cart</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}-quantity:{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shopping;
