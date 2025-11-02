// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

function App(){
const menuData = [
       {
      id: 1,
      name: "Pancakes",
      category: "breakfast",
      price: "$5.99",
      img: "https://via.placeholder.com/120x80?text=Pancakes",
    },
    {
      id: 2,
      name: "Burger",
      category: "lunch",
      price: "$8.99",
      img: "https://via.placeholder.com/120x80?text=Burger",
    },
    {
      id: 3,
      name: "Chocolate Shake",
      category: "shakes",
      price: "$4.99",
      img: "https://via.placeholder.com/120x80?text=Shake",
    },
    {
      id: 4,
      name: "Omelette",
      category: "breakfast",
      price: "$6.99",
      img: "https://via.placeholder.com/120x80?text=Omelette",
    },
    {
      id: 5,
      name: "Pasta",
      category: "lunch",
      price: "$9.99",
      img: "https://via.placeholder.com/120x80?text=Pasta",
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "shakes",
      price: "$5.49",
      img: "https://via.placeholder.com/120x80?text=Strawberry+Shake",
    },
  ];
 const [menuItems, setMenuItems] = useState(menuData);
const [activeCategory,setActiveCategory] = useState("all");
  
const handleFiter = (category) => {
 setActiveCategory(category)
  if(catrgory === "all"){
     setMenuItems(menuData);
  } else {
      const filtered = menuData.filter(
        (item) => item.category === category
      );
      setMenuItems(filtered);
    }
  };

  return (
    <>
 <div id="main">
      <h1 className="title">Menu Application</h1>

      <div className="buttons">
        <button id="filter-btn-1" onClick={() => handleFilter("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("shakes")}>
          Shakes
        </button>
        <button onClick={() => handleFilter("all")}>All</button>
      </div>

      <Menu items={menuItems} />
    </div>
    </>
  ) 
}  
export default App;

