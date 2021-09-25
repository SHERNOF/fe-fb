import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectCurrentUSer  } from '../../redux/user/user.selector'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cartDropdown/CartDropdown'
import './header.scss'
import { createStructuredSelector } from 'reselect'



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
                    // <div>
                    //     <div className="option" onClick={ () => auth.signOut() }> SIGN OUT </div>;
                    //     <div className="option" > { userName }</div>  
                    // </div>
                    
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
//     const mapStateToProps = (state) => ({    
//     // currentUser: state.user.currentUser
//     currentUser: selectCurrentUSer(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({    
    currentUser: selectCurrentUSer,
    hidden: selectCartHidden,
    
})


export default connect(mapStateToProps)(Header)
