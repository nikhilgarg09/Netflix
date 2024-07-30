import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { loginbgimage_URL } from '../utils/constants';
const Login = () => {
    const dispatch = useDispatch();
    const [errormessage,setErrorMessage]=useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password= useRef(null);
    const [togglestate,setTogglestate]=useState(true);
    const handleButtonClick = ()=>{
        const message = checkValidateData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message != null){
            return ;
        }
        if(togglestate === true){
            //sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const user = auth.currentUser;
                    dispatch(adduser({uid:user.uid,email:user.email,displayName:user.displayName}));
                  }).catch((error) => {
                });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+":"+errorMessage);
            });
        }
        else{
            //sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = auth.currentUser;
                dispatch(adduser({uid:user.uid,email:user.email,displayName:user.displayName}));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+":"+errorMessage);
            });
        }
    }
  return (
    <div>
        <Header/> 
        <div className='h-full object-contain fixed'>
            <img className="h-screen object-cover md:w-screen" src={loginbgimage_URL} alt=''/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute px-8 md:my-28 bg-black md:w-1/2 mx-auto right-0 left-0 my-[23%] text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{togglestate ? "Sign Up" : "Sign In"}</h1>
            {togglestate ? <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-500 '/>: null}
            <input ref={email}  type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500 '/>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500'/>
            <p className='text-red-700 text-lg'>{errormessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full' onClick={handleButtonClick}>{togglestate ? "Sign Up" : "Sign In"}</button>
            {togglestate ? <p onClick={()=>{
                setTogglestate(!togglestate);
            }}className='py-4 cursor-pointer'>Already a user ? <span>Sign In</span></p> : 
            <p onClick={()=>{
                setTogglestate(!togglestate);
            }}className='py-4 cursor-pointer'>New to Netflix ? <span>Sign Up</span></p>}
        </form>
    </div>
  )
}

export default Login