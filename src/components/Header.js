import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { logo_URL } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
          navigate("/browse");
          dispatch(adduser({uid:user.uid,email:user.email,displayName:user.displayName}));
        }
        else{
          dispatch(removeuser());
          navigate("/");
        }
      })
      return ()=> unsubscribe();
  },[])
  return (
    <div className='sm:pl-6 pl-4 absolute lg:pl-12 py-2 bg-gradient-to-b from-black z-20 w-full overflow-x-hidden'>
        <img className='w-28 md:w-40' src = {logo_URL} alt='logo'/>
    </div>
  )
}

export default Header 