import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigater = useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const submitFun = async(e) =>{
        e.preventDefault()
        let result = await fetch('http://localhost:8001/login',{
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email,password})
        })
       result = await result.json()
       if(result[0].name){
           let localData = localStorage.setItem('user',JSON.stringify(result))
               navigater('/dashboard')
       }
       
    }
  return (
    <div className='loginMain'>
        <form onSubmit={submitFun} className='login'>
            <input type="email" name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password"  name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Log In</button>
            <div className='changeRoute'>
                <p>Create a account</p>
                <Link to={'/signup'}>Sign Up</Link>
            </div>
        </form>

    </div>
  )
}

export default Login