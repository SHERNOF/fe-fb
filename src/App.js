
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import MessageBox from './components/message-box/MessageBox';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Homepage from './pages/homepage/Homepage';
import Shoppage from './pages/shop/Shoppage';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';



class App extends Component {
constructor(){
  super()

  this.state = {
    currentUser: null,
    message: ""
  }
}

unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
  
  //   // this.setState({ currentUser: user })
  //   // createUserProfileDocument(user)

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
          ...snapshot.data()
          }
        })
        console.log(snapshot.data())
        // console.log(this.state)
      })
    }
    this.setState({ currentUser: userAuth })  
  }) 
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}
  render (){
    // const { message } = this.state
    return (
      <div >
        <Header currentUser={ this.state.currentUser }/>
        {/* <MessageBox ></MessageBox> */}
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={Shoppage}></Route>
          <Route path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
        
        {/* <Homepage></Homepage> */}
      </div>
    );
  }

}

export default App;
