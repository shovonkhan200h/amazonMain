import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const Context = createContext()

export const AuthContext=({children})=>{
    const auth= getAuth()
    const [user,setUser]= useState()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        let unsubcribe;
        unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
            if(currentUser) setUser(currentUser)
            else{setUser(null)}
        })
        return ()=>{
            if(unsubcribe) unsubcribe()
        }

    },[])

    const value={
        user:user,
        setUser : setUser
    }

    return <Context.Provider value={value}>
        {
            !loading && children
        }
    </Context.Provider>
}