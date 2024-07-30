import React, { useEffect } from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import useNowplaying from '../hooks/useNowplaying';
import Secondarycontainer from './Secondarycontainer';
import Maincontainer from './Maincontainer';
import { useNavigate } from 'react-router-dom';
import usePopular from '../hooks/usePopular';
import useToprated from '../hooks/useToprated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useNowplaying(); 
  usePopular();
  useToprated();
  useUpcoming();
  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView());
  }
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
    });
  }
  return (
    <div className='overflow-x-visible'>
      <Header/>
      <button onClick={handleSignout} className='p-1 mt-4 absolute right-0 md:p-2  rounded-lg md:mt-6 mr-6 text-white bg-[#b82929] z-20'>Sign Out</button>
      <button onClick ={handleGptSearch}className='p-1 mt-4 absolute right-0 md:p-2  rounded-lg md:mt-6 mr-32 text-white bg-[#b82929] z-20'>{showGptSearch ? "Homepage" : "GPT Search"}</button>
      {showGptSearch ? <GptSearch/> :
      <>
      <Maincontainer/>
      <Secondarycontainer/>
      </>}
    </div>
  )
}

export default Browse