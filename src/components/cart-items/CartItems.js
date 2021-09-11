import React from 'react'
import './cartItems.scss'

export default function CartItems({ item: { price, name, imageUrl, quantity } }) {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item'></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'> {quantity} x ${price} </span>
            </div>
        </div>
    )
}
