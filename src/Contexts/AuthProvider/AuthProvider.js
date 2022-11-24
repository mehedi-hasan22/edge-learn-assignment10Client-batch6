import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';
// import { success } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const userInfo = { displayName: '', photoURL: '', UID: '' }

    const [ActiveUser, setActiveUser] = useState();

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    const signInGoogle = () => {
        setLoading(true);
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

    const logOut = () => {
        setLoading(true);
        toast.success('done')
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);

            if (currentUser === null || currentUser.emailVerified) {
                setUsers(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])


    const user = auth.currentUser;
    if (users !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = users.displayName;
        const photoURL = users.photoURL;
        userInfo.photoURL = photoURL;
        userInfo.displayName = displayName;
        const uid = users.uid;
        userInfo.UID = uid;
    }

    const signInGitHub = () => {
        setLoading(true);
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

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const signInWithPassword = async (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        user,
        users,
        ActiveUser,
        userInfo,
        updateUserInfo,
        providerLogin,
        createUser,
        signInWithPassword,
        signInGoogle,
        signInGitHub,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;