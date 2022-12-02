import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { StateContext } from '../Context/AuthProvider'

const Home = () => {

    const {
        name, 
        setName, 
        email, 
        setEmail, 
        password, 
        setPassword, 
        confirmPassword, 
        setConfirmPassword,
    } = useContext(StateContext);

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [redAlert, setRedAlert] = useState(false);
    const [greenAlert, setGreenAlert] = useState(false);

    const navigate = useNavigate();

    const checkName =(e)=>{
        setName(e.target.value);
        if(name.length===0){
            setValidName(false);
        
        }else{
            setValidName(true);
        }
    }

    const checkEmail =(e)=>{
        setEmail(e.target.value);
        if(email.length===0){
            setValidEmail(false);
        
        }else{
            setValidEmail(true);
        }
    }

    const checkPassword =(e)=>{
        setPassword(e.target.value);
        if(password.length===0){
            setValidPassword(false);
        }else{
            setValidPassword(true);
        }
    }

    const checkConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
        if(confirmPassword.length ===0 ){
            setValidConfirmPassword(false);
        }else{
            setValidConfirmPassword(true);
        }
    }


    const onSubmit=()=>{
        if(!validName || !validEmail || (password !== confirmPassword) || !validPassword){
            console.log("Invalid")
            setRedAlert(true);
            setGreenAlert(false);
            if(!validName){
                alert("Enter valid name");
            }else if(!validEmail){
                alert("Enter valid email");
            }else if(password !== confirmPassword){
                alert("Password did not matched");
            }else if(password.length===0){
                alert("Password is too short");
            }
        }else{
            setRedAlert(false);
            setGreenAlert(true);
            window.localStorage.setItem("localName", name);
            window.localStorage.setItem("localEmail", email);
            window.localStorage.setItem("localPassword", password);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                navigate('/profile');
            },500 );
        }
    }

    useEffect(() => {
        if(window.localStorage.getItem("localName")){
            setTimeout(()=>{
                navigate('/profile');
            }, 500)
        }
    }, [])
    

  return (
    <div className='h-full w-[90%] ml-20 flex '>
        <div className='mt-10 bg-white  basis-1/3'>
            <h1 className='text-5xl text-black font-black text-center'>SignUp</h1>
            <div className='mt-5 shadow-2xl rounded px-8 pt-6 pb-8 mb-4'>
                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Full Name' 
                        className='bg-transparent h-10 w-full outline-none text-gray-600' 
                        value={name} 
                        onChange={checkName} />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Email' 
                        className='bg-transparent h-10 w-full outline-none text-gray-600' 
                        value={email} 
                        onChange={checkEmail}  />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Password' 
                        className='bg-transparent h-10 w-full outline-none text-gray-600' 
                        value={password} 
                        onChange={checkPassword} />
                </div>

                <div className=' border border-transparent border-b-white mt-1'>
                    <input 
                        placeholder='Confirm Password' 
                        className='bg-transparent h-10 w-full outline-none text-gray-600'  
                        value={confirmPassword} 
                        onChange={checkConfirmPassword} />
                </div>

                <div className='py-5'>
                    <h2 className={`text-red-800 ${!redAlert?"hidden":"flex"}`}>Error: All the fields are mandatory</h2>
                    <h2 className={`text-green-700  ${!greenAlert?"hidden":"flex"}`}>Successfully Signed Up!</h2>
                </div>

                <button onClick={onSubmit} className='bg-blue-700 hover:bg-blue-500 text-white w-28 rounded-full p-2 '>Signup</button>
            </div>
        </div>
        <div className='basis-1/2  mt-10 m-auto'>
            <img src='https://media.istockphoto.com/id/1241710244/vector/working-at-home-vector-flat-style-illustration-online-career-coworking-space-illustration.jpg?s=612x612&w=0&k=20&c=U34U9zhLBWDEbfPmgmlnFJiP-EuWu7MEUCxUls_BnKU=' width={1200}/>
        </div>
    </div>
  )
}

export default Home