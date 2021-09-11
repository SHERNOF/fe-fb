import React from 'react'
import CartItems from '../cart-items/CartItems'
import CustomButton from '../custom-button/CustomButton'
import './cartDropdown.scss'
import { connect } from 'react-redux'


const CartDropdown = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />     
            {
                cartItems.map( cartItem => <CartItems key={cartItem.id} item={cartItem}></CartItems>)
            }   
            
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})


export default connect(mapStateToProps)(CartDropdown)


