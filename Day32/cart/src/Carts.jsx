import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { product } from './product';
import { totalCartAmount , updateCart, removeItem } from './OperationSlice';

function Carts() {
    const dispatch = useDispatch();
    const operation = useSelector(state => state.operation);

    useEffect(()=>{
       dispatch(totalCartAmount());
    },[operation.cartItems]);

    return (
        <div className='whole'>

            <div className='top'>
                    <a href='' className='home'> Home  </a> <a href="">About</a> <a href="">Shop</a> 
            </div>

            <h2>Your Cart Items</h2>
            <div className='container'>
                {product.map((product) => {
                    return <div key={product.id} className='card'>
                        
                        <img src={product.thumbnail} alt={product.title} />

                        <div className='detail'>
                            <div><b>{product.title}</b></div>
                            <div>{product.description}</div>
                        </div>
                            <div className='price'>
                            <input
                                min="1"
                                max="100"
                                type="number"
                                value={operation.cartItems[product.id] || 0}
                                onChange={(e) => dispatch(updateCart({ id: product.id, newAmount: Number(e.target.value) }))}
                            />
                            <b>${product.price}</b>

                                <button className='btn btn-primary form-control'
                                    onClick={() => dispatch(removeItem(product.id))}>
                                    remove
                                </button>
                            </div>
                        </div>
                }               
)}
                <div className='checkout'>
                    <b>
                        total : 
                        <span className='total'>
                            ${operation.totalAmount}
                            <span className='sub-total'>
                                Shipping free
                                <i class="fa-solid fa-truck-fast"></i>
                             </span>
                        </span>
                    </b>
                </div>
                <div className='end'>
                    <button>Checkout</button>
                    <button>Continue Shopping</button>
                </div>
                
            </div>
        </div>
    )
}

export default Carts;
