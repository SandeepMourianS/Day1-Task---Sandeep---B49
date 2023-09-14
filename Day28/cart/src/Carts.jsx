import React, { useContext }from 'react'
import { product } from './product'
import './App.css'
import { Products } from './Products';
import { cartContext } from './Context';

function Carts() {
    //use context 
    const { totalCartAmount } = useContext(cartContext);

    const total = totalCartAmount();

  return (
    <div>
        <div className='container'>
                {product.map((products) => (
                    <Products key={products.id} data={products}/>
                ))}
            <div className='sub-total'>
                <div>shipping free</div>
            </div>
                <div className='checkout'>
                    <b>total :  <span className='total'>${total}</span></b> 
                </div>
        </div>
    </div>
  )
}

export default Carts