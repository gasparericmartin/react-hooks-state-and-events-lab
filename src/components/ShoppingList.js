import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [itemsList, setItemsList] = useState([...items])
  
  function handleChange(e) {
    
    setSelectedCategory((selectedCategory) => selectedCategory = e.target.value)

    setSelectedCategory((selectedCategory) => {
  
    if (e.target.value === 'All') {
      setItemsList(ItemsList => [...items])
      console.log([...items])
    }
    else {
      setItemsList(itemsList => 
      items.filter(item => item.category === selectedCategory))
    }
  })
  }


  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
