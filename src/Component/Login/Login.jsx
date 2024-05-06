import React, { useState } from 'react'
import './Login.css'
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { AiTwotoneEye } from "react-icons/ai";
const Login = () => {
   const [password,setPassword] = useState(false);
   const passwordToggleHandler = () => {
      setPassword(!password);
   }
   const[userData,setUserDara] = useState({
      username:'',
      password:''
   })
   const inputHandle = (e) => {
      setUserDara((prev)=>({...prev,[e.target.id]:e.target.value}));
   }
   const formSubmitHandler = (e) => {
      e.preventDefault();
      console.log(userData)
   }
   return (
      <div className='login-container'>
         <form className='login-form' onSubmit={formSubmitHandler}>
            <div>
               <label htmlFor='username'>Username</label>
               <input 
               type='text' 
               placeholder='Username' 
               id='username'
               onChange={inputHandle}
               required
               />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <input 
                type={password ?'text':'password'}
                placeholder='Password' 
                id='password'
                onChange={inputHandle}
                required
                />
               {
               !password
               ?
               <AiTwotoneEyeInvisible 
               onClick={passwordToggleHandler} 
               className='password-toggle'/>
               :
               <AiTwotoneEye
                onClick={passwordToggleHandler}
                 className='password-toggle'/>
                 }
            </div>
            <div>
               <button type='submit' className='btn btn-login'>Login</button>
            </div>
         </form>
      </div>
   )
}

export default Login;