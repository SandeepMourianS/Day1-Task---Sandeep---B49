import React, { useState } from 'react';
import { PRODUCTS } from './Products';
import './Shop.css';

function Shop() {

  //State for dynamic updating
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCount(count+1);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
    setCount(count-1);
  };

  return (
    <>
      <div className='top'>
          <span className='dashboard'>
            <a href='' className='home'> Home  </a> <a href="">About</a> <a href="">Shop</a> 
          </span>
          <span><input type="search" placeholder='search for product...'/> <button className='search'>Search</button></span>
          <button className='top-cart'>Cart <span className='count'>{count}</span></button>
      </div>
        <div className='Head'>
          <p>
            <h1>BIG SHOPPING <i className="fa-brands fa-shopify fa-beat fa-xl"></i></h1>
          </p>
          <p>
            No.1 E-Commerce Platform
          </p>
        </div>
      <div className='container'>
        {PRODUCTS.map((product) => (
          <div className='card' key={product.id}>
            <div className='image'>
              <img src={product.image} alt="..." />
            </div>
            <div className='detail'>
              <div className='offer'>{product.offer}</div>
              <div className='product'>{product.productName}</div>
              <div className='price'>&#8377;{product.price} <s>{product.strike}</s></div>
              <div>FREE Delivery over ₹499.</div>
              {cartItems.some(item => item.id === product.id) ? (
                <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
              ) : (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='end'>
          Copyright Shop @2023
      </div>
    </>
  );
}

export default Shop