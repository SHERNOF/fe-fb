import React from 'react'
import CartItems from '../cart-items/CartItems'
import CustomButton from '../custom-button/CustomButton'
import './cartDropdown.scss'
import { connect } from 'react-redux'
import {  selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />     
            {
                cartItems.length ? (
                    cartItems.map( cartItem => <CartItems key={cartItem.id} item={cartItem}></CartItems>)
                ) :
                (
                    <span className="empty-message">Your cart is empty</span>
                )
                
            }   
            
            {/* <CustomButton onClick={() => history.push('/checkout') }>GO TO CHECKOUT</CustomButton> */}
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}> GO TO CHECKOUT </CustomButton>
        </div>
    )
}

// const mapStateToProps = ({ cartItems }) => ({
//     const mapStateToProps = state => ({
//         // cartItems
//         cartItems: selectCartItems(state)
// })

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))


