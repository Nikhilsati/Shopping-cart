import React from 'react'

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <div>
                <h3>{props.name}</h3>
                <h3>${props.price}</h3>
            </div>
            <div>
                <img src={props.image}/>
            </div>
        </div>
    )
}

export default CartItem
