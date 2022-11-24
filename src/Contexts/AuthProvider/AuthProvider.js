import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/Firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const userInfo = { displayName: '', photoURL: '', UID: '' }

    const [ActiveUser, setActiveUser] = useState();
    console.log(ActiveUser)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }


    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setActiveUser(user)
                userInfo.displayName = user.displayName
                userInfo.photoURL = user.photoURL
                userInfo.UID = user.uid
            })
            .catch(error => {
                console.error(error)
                alert(error.massage)
            })
    }


    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        userInfo.photoURL = photoURL;
        userInfo.displayName = displayName;
        const uid = user.uid;
        userInfo.UID = uid;
    }

    const signInGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setActiveUser(user)
                userInfo.displayName = user.displayName
                userInfo.photoURL = user.photoURL
                userInfo.UID = user.uid
            })
            .catch(error => {
                console.error(error)
            })
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithPassword = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, userInfo, providerLogin, createUser, signInWithPassword, signInGoogle, signInGitHub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;