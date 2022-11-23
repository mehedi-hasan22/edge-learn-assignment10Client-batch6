import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../../Firebase/Firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Jhakkas Ali' }

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
            })
            .catch(error => {
                console.error(error)
            })
    }

    const signInGitHub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { user, providerLogin, createUser, signInWithPassword, signInGoogle, signInGitHub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;