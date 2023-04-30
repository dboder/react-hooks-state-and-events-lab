import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [currShopFilter, setShopListFilter] = useState("All");

  function handleShoppingListFilter(event) {
    setShopListFilter(event.target.value);
  }

  const filtereditemList = items.filter((item) => {
    return currShopFilter === "All" ? true : item.category === currShopFilter;
  });
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleShoppingListFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtereditemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
