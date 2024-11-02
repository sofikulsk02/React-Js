import React, { useState } from "react";
const CartForShopping = ({ isAdmin }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [items, setItems] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    if (!itemName || !quantity) return;
    const newItem = {
      itemName,
      quantity: parseInt(quantity),
    };
    setItems((prevList) => [...prevList, newItem]);
    setItemName("");
    setQuantity("");
  };
  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="h-[20px] w-[400px] rounded-l-md border border-black p-4"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="h-[20px] w-[200px] rounded-r-md border border-black p-4"
      />
      <button
        onClick={handleClick}
        className="h-[35px] bg-pink-500 rounded-md w-[120px]"
      >
        Add to cart
      </button>
      {isAdmin ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.itemName}-quantity:{item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          UnAuthorized user please <a href="">Login</a>here
        </p>
      )}
    </div>
  );
};

export default CartForShopping;
