import React , { useContext }from 'react'
import { cartContext } from './Context'

export const Products = (props) => {
  //props from cart
  const { id , title , description , price , thumbnail } = props.data;
  //use context
  const { cartItems , sub , add , removeItem , updateCart } = useContext(cartContext);

  

  return (
    <div>
        <div key={id} className='card'>
          
          <span><img src={thumbnail}/></span>

          <div className='detail'>
            <p><b>{title}</b></p>
            <p>{description}</p> 
          </div> 

          <div className='price'>
            <button onClick={()=>sub(id)}>-</button>
            
            <input type="text" 
            value={cartItems[id]} 
            onChange={(e) => updateCart(Number(e.target.value))}/>
            
            <button onClick={()=>add(id)}>+</button>

            <b>${price}</b> 

              <div>
                <button className='btn btn-primary form-control'
                 onClick={()=>removeItem(id)}>
                  remove
                </button>
              </div> 

          </div> 
        </div>
    </div>
  )
}
