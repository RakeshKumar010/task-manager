import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigater = useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const submitFun = (e) =>{
        e.preventDefault()
        let localData = localStorage.getItem('user')
        localData=JSON.parse(localData)
        if(localData.email===email && localData.password===password){
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