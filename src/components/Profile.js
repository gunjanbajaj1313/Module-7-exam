import React, {  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../Context/AuthProvider'

const Profile = () => {


  const navigate = useNavigate();

  let getName = window.localStorage.getItem("localName");
  let getEmail = window.localStorage.getItem("localEmail");
  let getPassword = window.localStorage.getItem("localPassword");

  useEffect(() => {
    if(!getName){
      setTimeout(()=>{
        navigate('/');
      }, 500)
    }
  }, [])
  
  const signOut =()=>{
    window.localStorage.setItem("localName", "");
    window.localStorage.setItem("localEmail", "");
    window.localStorage.setItem("localPassword", "");
    navigate('/')
  }

  return (
    <div className='w-[40%] m-auto mt-10 text-2xl flex flex-col gap-4 bg-white shadow-2xl rounded px-8 pt-6 pb-8 text-gray-700'>
        <h2>Profile </h2>
        <h2>Full Name : {getName}</h2>
        <h2>Email : {getEmail} </h2>
        <h2>Password : {getPassword} </h2>
        <button onClick={signOut} className='bg-blue-700 hover:bg-blue-500 text-white w-28 rounded-full p-2'>Logout</button>
    </div>
  )
}

export default Profile