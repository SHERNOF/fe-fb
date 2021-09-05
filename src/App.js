
import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shop/Shoppage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'



class App extends Component {
// constructor(props){
//   super(props)

//   this.state = {
//     currentUser: null,
//     message: ""
//   }
// }

unsubscribeFromAuth = null

componentDidMount(){
  const { setCurrentUser } = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  
  //   // this.setState({ currentUser: user })
  //   // createUserProfileDocument(user)

  // putting the user data from firestore to App to be usable

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapshot => {
        // this.setState({
        //   currentUser: {
          // this.props.setCurrentUser({
            setCurrentUser({
            id: snapshot.id,
          ...snapshot.data()
          })
        })
        // console.log(snapshot.data())
        // console.log(this.state)
      // })
    }
    
    // this.setState({ currentUser: userAuth })  
    setCurrentUser( userAuth )  
  }) 
}

// end of putting the user data from firestore to App to be usable

componentWillUnmount(){
  this.unsubscribeFromAuth()
}
  render (){
    // const { message } = this.state
    return (
      <div >
        <Header />
        <Switch>
        {/* <Route exact path='/' component={Homepage} /> */}
          <Route exact path='/' render={ () => !this.props.currentUser ? (<Redirect to='/signin'c/>) : (<Homepage/>) } />
          <Route path='/shop' component={Shoppage} />

          {/* <Route path='/signin' component={SignInAndSignUp}></Route> */}
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />) } />
          
        </Switch>
        {/* <Homepage></Homepage> */}
      </div>
    );
  }

}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
