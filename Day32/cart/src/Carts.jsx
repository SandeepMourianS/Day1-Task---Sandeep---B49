import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { product } from './product';
import { totalCartAmount, updateCart, sub, add, removeItem } from './OperationSlice';


function Carts() {
    const dispatch = useDispatch();
    const operation = useSelector(state => state.operation);
    console.log(operation.cartItems);
    console.log(operation.totalAmount);
      
    return (
        <div>
            <div className='container'>
                {product.map((product) => {
                    return <div key={product.id} className='card'>
                        
                        <img src={product.thumbnail} alt={product.title} />

                        <div className='detail'>
                            <div><b>{product.title}</b></div>
                            <div>{product.description}</div>
                        </div>

                        <div className='price'>
                            <button onClick={() => dispatch(sub(product.id))}>-</button>

                            <input
                                type="text"
                                value={operation.cartItems[product.id] || 0}
                                onChange={(e) => dispatch(updateCart({ id: product.id, newAmount: Number(e.target.value) }))}
                            />


                            <button onClick={() => dispatch(add(product.id))}>+</button>

                            <b>${product.price}</b>

                            <div>
                                <button className='btn btn-primary form-control'
                                    onClick={() => dispatch(removeItem(product.id))}>
                                    remove
                                </button>
                            </div>
                        </div>
                    </div>
}               
)}
                <div className='sub-total'>
                    <div>Shipping free</div>
                </div>
                <div className='checkout'>
                    <b>total : <span className='total'>${operation.totalAmount}</span></b>
                </div>
            </div>
        </div>
    )
}

export default Carts;
