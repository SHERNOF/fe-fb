import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import Signup from '../../components/sign-up/Signup'
import './signinandsignup.scss'

export default function SignInAndSignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn></SignIn>
            <Signup></Signup>
        </div>
    )
}
