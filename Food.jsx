import React, { useContext, useState } from 'react';
import { foodItems } from './index';
import { CartProvider, CartContext } from './CartContext';
function Food() {
  const [selectedCategory, setSelectedCategory] = useState("Burger");
  const {cart,addToCart} = useContext(CartContext);
  console.log(cart);
  const renderContent = () => {
    console.log(foodItems)
      return (
        <div className="food-grid">
          {foodItems.filter(item => item.category === selectedCategory).map((item, index) => (
            <button key={index} onClick={() => addToCart(item)}>
              <img src={item.image} style={{height:"40px"}} />
              {item.name}
              <button style={{padding:'5px 10px', margin:"60px 0 0 10px", border:"none", backgroundColor:"red", color:"white"}}>Add to cart</button>
              <p style={{margin:"-25px 0 0 80px", color:"red"}}>${item.price}</p>
            </button>
          ))}
        </div>
      );
    };

  return (
    <div className="food-container">
      <h2 style={{ color: "black", fontWeight: "600", padding: "20px 200px" }}>Popular Food</h2>
      <ul>
        <li>
          <a 
            className={selectedCategory === "Burger" ? 'active' : ''}
            onClick={() => setSelectedCategory("Burger")}
          >
            Burger
          </a>
        </li>
        <li>
          <a 
            className={selectedCategory === "Pizza" ? 'active' : ''}
            onClick={() => setSelectedCategory("Pizza")}
          >
            Pizza
          </a>
        </li>
        <li>
          <a 
            className={selectedCategory === "Biryani" ? 'active' : ''}
            onClick={() => setSelectedCategory("Biryani")}
          >
            Biryani
          </a>
        </li>
        <li>
          <a 
            className={selectedCategory === "Shawarma" ? 'active' : ''}
            onClick={() => setSelectedCategory("Shawarma")}
          >
            Shawarma
          </a>
        </li>
      </ul>
      {renderContent()}
    </div>
  );
}

export default Food;
