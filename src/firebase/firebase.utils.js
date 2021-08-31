import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAFz1ZABq0qLofV2giijYsu3AF3FMACPLs",
    authDomain: "ecomm-2377c.firebaseapp.com",
    projectId: "ecomm-2377c",
    storageBucket: "ecomm-2377c.appspot.com",
    messagingSenderId: "90986084323",
    appId: "1:90986084323:web:297432fb25724f76a412d6",
    measurementId: "G-8DVVBW2DED"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Storing data (users) to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if( !userAuth ) return

    // const userRef = firestore.doc('users/124')
    
    // this is querying the properties from the userAuth object
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    // this is how to get a snapshot of the queried reference object
    const snapShot = await userRef.get()

    // console.log(snapShot)

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        }catch(error){
            console.log('error creating user', error.message)
        }
    }
    console.log(snapShot)
    return userRef;
}

// Google Sign In Utility

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

