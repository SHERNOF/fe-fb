import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cartDropdown.scss'


export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className='art-items'></div>            
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}


