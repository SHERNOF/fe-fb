import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cartDropdown/CartDropdown'
import './header.scss'


const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header"> 
            <Link className="logo-container" to='/'>
                <Logo className="logo"></Logo>
            </Link>
            
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                { 
                    currentUser ? 
                    <div className="option" onClick={ () => auth.signOut() }> SIGN OUT  -  { currentUser.displayName }</div>  
                    :
                    <Link className="option" to="/signin"> SIGN IN </Link>
                }
                <CartIcon />
            </div>
                { 
                hidden ? null : <CartDropdown></CartDropdown>
                }
            
        </div>
    )
}



// const mapStateToProps = state => ({    
    const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({    
    // currentUser: state.user.currentUser
    currentUser,
    hidden
})


export default connect(mapStateToProps)(Header)
