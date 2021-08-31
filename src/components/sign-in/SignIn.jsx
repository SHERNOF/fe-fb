import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './signin.scss'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'
import MessageBox from '../message-box/MessageBox'


export default class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email:"", password:"" });
      } catch (error) {
            this.setState({ message: error.message })
      }
    };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your username and password</span>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput label="password" type="password" name="password" handleChange={this.handleChange} value={this.state.password} required />
                    
                    {/* {/* <input type="submit" value='Submit Form'></input> */}
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                    
                        <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn> Sign In with Google </CustomButton>
                    </div>
                </form>

                {this.state.message ? setTimeout(() => (<MessageBox status="error" message={this.state.message}></MessageBox>), 1000 ) : ''}
                
            </div>
        )
    }
}
