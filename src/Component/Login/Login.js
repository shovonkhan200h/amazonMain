import React, { useState } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import logo from '../../assests/logo2.jpg'

const Login = () => {
    const [newUser, setNewuser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();


    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSingUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredential);
        } catch (error) {
            console.log(error);
        }
    };

    const doSinginWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider)
            console.log(userCredential);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser) {
            handleSingUp();
        } else {
            handleSignIn();
        }
    };
    return (
     <div>
        <div className='w-full h-screen flex items-center justify-top flex-col'>
            <div>
                <h2>Amazon</h2>
            </div>

            <div className='mt-5 border p-20'>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                   <input type='text' className='loginHover'/>
                   <input type='text' className='loginHover'/>
                </form>
            </div>
        </div>
     </div>
    );
};

export default Login;