import React from 'react'
import './cartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
// import CartItems from '../cart-items/CartItems'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'


//  function CartIcon({ toggleCartHidden }) {
    function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            {/* <span className='item-count'>0</span> */}
            <span className='item-count'>{ itemCount }</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     const mapStateToProps = state  => ({
//     // itemCount: cartItems.reduce( (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//     // itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//     itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

// export default connect(null, mapDispatchToProps)(CartIcon)
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
