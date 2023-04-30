import React, { useState } from "react";

const defaultArr = {
  liClass: "",
  buttonText: "Add to Cart",
  buttonClass: "add",
  id: 0
};

const changedArr = {
  liClass: "in-cart",
  buttonText: "Remove From Cart",
  buttonClass: "remove",
  id:1
};

function Item({ name, category }) {
  const [itemConfig, setItemConfig] = useState(defaultArr);

  function toggleCart(e) {
    console.log(itemConfig);
    setItemConfig(itemConfig.id === 0 ? {...changedArr} : {...defaultArr});
  }
  return (
    <li className={itemConfig.liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemConfig.buttonClass} onClick={toggleCart}>{itemConfig.buttonText}</button>
    </li>
  );
}

export default Item;
